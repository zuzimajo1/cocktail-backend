const router = require('express').Router();
const Cart = require('../Models/Cart');

//post Cart
router.post('/', async (req, res)=>{
    const newCart = new Cart(req.body);

    try {
        const addCart = await newCart.save();
        res.status(200).json(addCart);
    } catch (error) {
        res.status(500).json(error);
    }
})


//get All Cart
router.get('/', async (req, res)=>{
    try {
        const getAllCart = await Cart.find();
        res.status(200).json(getAllCart);
    } catch (error) {
        res.status(500).json(error);
    }
})


//get all Cart by username
router.get('/Cart/:username', async (req, res)=>{
    try {
        const getAllCartByUsername = await Cart.find({username: req.params.username});
        res.status(200).json(getAllCartByUsername);
    } catch (error) {
        
    }
})


//update Cart
router.patch('/update/:id', async (req, res)=>{
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {   
                new: true
            }
        );
        res.status(200).json(updateCart);
    } catch (error) {
        res.status(500).json(error);
    }
} )


//delete Cart

router.delete('/deleteCart/:id', async (req, res)=>{
    try {
        const deleteItem = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteItem);
    } catch (error) {
        res.status(500).json(error)
    }
})


//deleteMany when cocktailCheck is true
router.delete('/deleteManycart/:username', async (req, res)=>{
    try {
        const DeleteManyItem = await Cart.find({
          username: req.params.username,
        }).deleteMany({ CocktailisCheck : true});
        res.status(200).json(DeleteManyItem);
    } catch (error) {
        
    }
})

module.exports = router;