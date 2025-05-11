let cart = [];

fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(products => {
        const list = document.getElementById('product-list');
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
            `;


            list.appendChild(div);
        });
    });

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartList.innerHTML = '';
    let sum = 0;
    cart.forEach((item, index) => {
        sum += item.price;
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(li);
    });
    total.textContent = `Total: $${sum.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove 1 item at the given index
    renderCart();
}

function checkout() {
    fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, total: cart.reduce((sum, p) => sum + p.price, 0) })
    }).then(res => res.text())
        .then(msg => {
            alert(msg);
            cart = [];
            renderCart();
        });
}
function removeFromCart(index) {
    cart.splice(index, 1); // Remove 1 item at the given index
    renderCart();
}