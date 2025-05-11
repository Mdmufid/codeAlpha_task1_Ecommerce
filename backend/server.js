const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

app.use('/images', express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));