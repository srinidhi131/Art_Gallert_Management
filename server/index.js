const express = require("express");
const app = express();
const cors = require("cors");
const pool = require ("./db");

app.use(cors()); 
app.use(express.json());

//create an user
app.post("/signup",async(req,res) => {
    try{
        const {cust_name , cust_email , cust_password} = req.body;
        const newUser = await pool.query("INSERT INTO customer (cust_name,cust_email,cust_password) VALUES ($1,$2,$3) RETURNING *" , [cust_name, cust_email, cust_password])
        res.json(newUser.rows)
    }catch (err) {
        console.log(err.message)
    }
})

app.listen(5000 , () => {
    console.log("server has started in port 5000")
});

