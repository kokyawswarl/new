const express= require("express");
const path = require('path')
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path:'./.env'});

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password :process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
})

const publicDirctroy = path.join(__dirname,  './public')
app.use(express.static(publicDirctroy));

app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.set('view engine','hbs')

db.connect((error)=>{
    if (error){
        console.log(error);
    }else{
        console.log("MySql Connected...")
    }
})

// app.get("/",(req,res)=>{
//     // res.send("<h1>Hello Word</h1>")
//     res.render("index")
// })
// app.get("/login",(req,res)=>{
//     // res.send("<h1>Hello Word</h1>")
//     res.render("login")
// })
// app.get("/register",(req,res)=>{
//     // res.send("<h1>Hello Word</h1>")
//     res.render("registar")
// })
// app.get("/forget",(req,res)=>{
//     // res.send("<h1>Hello Word</h1>")
//     res.render("forget")
// })
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.listen(5000,()=>{
    console.log("Server starting....")
})