const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const orderRoute = require("./routes/orders");
const cartRoute = require("./routes/carts");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successfull!!"))
    .catch((err)=>{
        console.log(err);
     });

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 5000, () =>{
    console.log("Backend is runing");
});