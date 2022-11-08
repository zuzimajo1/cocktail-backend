const router = require('express').Router();
const User = require('../Models/User');


//Get all Users
router.get('/', async (req, res)=>{
    const newUsers = req.query.new;

    try {
        const getAllUser = newUsers ? await User.find().sort({createdAt: -1}).limit(5) : await User.find();
        res.status(200).json(getAllUser);
    } catch (error) {
        res.status(500).json(error);
    }
})



//delete User

router.delete('/DeleteUser/:id', async (req, res)=>{
    try {
        const DeleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(DeleteUser);
    } catch (error) {
        res.status(500).json(error);
    }
})


//update User
router.patch('/update/:id', async (req, res)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router;