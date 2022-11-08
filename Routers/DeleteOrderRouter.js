const router = require('express').Router();
const DeleteOrder = require('../Models/DeleteOrder');


//delete Order

router.post('/', async (req, res)=>{
    const newDeleteOrder = new DeleteOrder(req.body);
    
    try {
        const addDeleteOrder = await newDeleteOrder.save();
        res.status(200).json(addDeleteOrder);    
    } catch (error) {
        res.status(500).json(error);
    }
})


//get DeleteOrder by Username

router.get('/DeleteOrderByUsername/:username', async (req, res)=>{
    try {
        const getDeleteOrderByUsername = await DeleteOrder.find({username:req.params.username});
        res.status(200).json(getDeleteOrderByUsername);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;