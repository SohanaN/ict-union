const express = require("express");
const cors=require("cors");
const mysql = require('mysql');

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ict"
})

// show slider
app.get("/",(req, res)=>{
    const sql = "SELECT * FROM sliders";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show activities
app.get("/activities",(req, res)=>{
    const sql = "SELECT * FROM services";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show portfolios
app.get("/events",(req, res)=>{
    const sql = "SELECT * FROM portfolios";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
}
    )