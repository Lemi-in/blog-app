const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
dotenv.config();

const salt = bcrypt.genSaltSync(10);
const secret = 'abcdefghij'

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectToMongoDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());

app.post("/register", async  (req, res) =>  {
  const { username, password } = req.body;
  try{
    const userDoc = await User.create( { username, password:bcrypt.hashSync(password, salt)});
    res.json(userDoc);
    console.log('text ok');
  
    } catch (err) {
    console.error("Error registering user:", err);
    res.status(400).json(err);
    } 
});

app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});