const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Wireless Mouse', price: 25.99, image: 'http://localhost:3000/images/mouse.jpeg' },
    { id: 2, name: 'Keyboard', price: 45.50, image: 'http://localhost:3000/images/keyboard.jpeg' },
    { id: 3, name: 'HD Monitor', price: 150.00, image: 'http://localhost:3000/images/monitor.jpeg' },
    { id: 4, name: 'USB-C Hub', price: 30.25, image: 'http://localhost:3000/images/usb.jpeg' },
    { id: 5, name: 'Hard Disk', price: 50.25, image: 'http://localhost:3000/images/hard-disk.jpeg' },
    { id: 6, name: 'SSD', price: 60.25, image: 'http://localhost:3000/images/ssd.jpeg' },
];




router.get('/', (req, res) => {
    res.json(products);
});

module.exports = router;
