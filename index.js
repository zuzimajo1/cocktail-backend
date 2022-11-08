const mongoose = require("mongoose");
const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const cors = require("cors");
const AuthRouter = require('./Routers/AuthRouter'); 
const CartRouter = require('./Routers/CartRouter');
const DeleteOrderRouter = require('./Routers/DeleteOrderRouter');
const OrderRouter = require('./Routers/OrderRouter');
const UserRouter = require('./Routers/UserRouter');


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connect to the DB"))
  .catch((err) => console.log(err));

//send and receive json data

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/auth", AuthRouter);
app.use("/api/cart", CartRouter);
app.use("/api/order", OrderRouter);
app.use("/api/deleteOrder", DeleteOrderRouter);
app.use("/api/user", UserRouter);


app.get('/', (req, res)=>{
    res.status(200).send('Hello')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Server is listening on port 5000'))
