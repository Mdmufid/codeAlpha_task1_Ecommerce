const express = require('express');
const router = express.Router();

// Store orders in memory (reset every restart)
const orders = [];

router.post('/', (req, res) => {
    const { items, total } = req.body;
    if (!items || !total) return res.status(400).send('Invalid order');

    const order = { id: orders.length + 1, items, total, date: new Date() };
    orders.push(order);
    res.send('Order placed successfully');
});

module.exports = router;