const router = require('express').Router();
const User = require('../Models/User');
const cryptojs = require('crypto-js');

//Register
router.post('/register', async(req, res)=>{
    //create a new user using the schema
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: cryptojs.AES.encrypt(
            req.body.password,
            process.env.PASSKEY
        ).toString(),
        img: req.body.img,
    })

    try {
        const savenewuser = await newUser.save();
        res.status(200).json(savenewuser);
    } catch (error) {
        res.status(500).json(error);
    }
})



//Login
router.post('/login', async (req, res)=>{
    try {
        const user = await User.findOne({username: req.body.username}); //the data goes to the user variable
        if(!user){
            return res.status(401).json('Wrong credentials')
        }
        //decryting the password
        const decryptPass = cryptojs.AES.decrypt(
            user.password,
            process.env.PASSKEY
        );

        const userPassword = decryptPass.toString(cryptojs.enc.Utf8);
        
        if(userPassword !== req.body.password){
            return res.status(401).json('Wrong Credentials');
        }   

        const {password, ...others} = user._doc;


        res.status(200).json({...others});
    } catch (error) {
        res.status(500).json(500);
    }
})


module.exports = router;

