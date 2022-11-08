const router = require('express').Router();
const Order = require('../Models/Order');

//post Order
router.post('/', async (req, res)=>{
    const newOrder = new Order(req.body);
    try {
        const addOrder = await newOrder.save();
        res.status(200).json(addOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})


//get All Order
router.get('/', async (req, res)=>{
    try {
        const getAll  = await Order.find();
        res.status(200).json(getAll);
    } catch (error) {
        res.status(500).json(error);
    }
})


//get Order by username
router.get('/Order/:username', async (req, res)=>{
    try {
        const getOrderByUsername = await Order.find({username: req.params.username});
        res.status(200).json(getOrderByUsername);
    } catch (error) {
        res.status(500).json(error);
    }
})


//delete Order
router.delete('/deleteOrder/:id', async (req, res)=>{
    try {
        const deleteOrder = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;