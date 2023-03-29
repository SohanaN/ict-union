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

// show Slider
app.get("/",(req, res)=>{
    const sql = "SELECT * FROM sliders";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show Activities
app.get("/activities",(req, res)=>{
    const sql = "SELECT id, title FROM services limit 2";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show Project
app.get("/project",(req, res)=>{
    const sql = "SELECT * FROM services ";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show Events
app.get("/events",(req, res)=>{
    const sql = "SELECT * FROM portfolios";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show Communities
app.get("/communities",(req, res)=>{
    const sql = "SELECT * FROM portfolios";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show Team
app.get("/team",(req, res)=>{
    const sql = "SELECT * FROM members";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show Work Plan
app.get("/workPlan",(req, res)=>{
    const sql = "SELECT * FROM pages";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

// show Gallery
app.get("/gallery",(req, res)=>{
    const sql = "SELECT * FROM galleries";
    db.query(sql,(err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
}
    )