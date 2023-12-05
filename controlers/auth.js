const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password :process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
})


exports.register =(req, res)=>  {
    console.log(req.body);
    const { name , email , password , rePassword } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async(error ,results)=>{
        if(error){
            console.log(error);

        }
        if(results.length > 0){
            return res.render('register',{
                message: 'This Email is already in used..'
            })
        }
        if(email.length < 5){
            return res.render('register',{
                message: 'This Email is not foun....'
            })
        }
        else if(password !==rePassword){
            return res.render('register',{
                message: 'Password do not match..min 8'
            });
        }
        else if(password.length<7){
            return res.render('register',{
                message: 'Password length is short....'
            });
        }
        
        db.query('INSERT INTO users SET ?',{name:name ,email:email,password:password},(error ,results)=>{
            if(error){
                console.log(error);
            }else{
                return res.render('register',{
                    message: 'Register Ok....'
                });
            }
        })

    });
}
exports.login = (req, res) =>{
    const { email , password } = req.body;
    
    db.query('SELECT * FROM users WHERE email = ?', [email], async(error ,results)=>{
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            if(await results[0].password == password){
            
                return res.render('home',{
                    message: JSON.stringify(results)
                });
            }else{
                
                return res.render('login',{
                    message: "Psaaword Error...."
                });
            }
        }else{
            return res.render('login',{
                message: 'Email error....'
            });
        }
        
    })
}
exports.forget=(req, res) =>{
    console.log(req.body);
    const { name , email , password , rePassword } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async(error ,results)=>{
        if(error){
            console.log(error);

        }
        if(results.length < 0){
            return res.render('forget',{
                message: 'This Email is not foun...'
            })
        }
        if(results[0].name !== name){
            return res.render('forget',{
                message: JSON.stringify(results[0].name) 
            })
        }

        else if(password !==rePassword){
            return res.render('forget',{
                message: 'Password do not match..min 8'
            });
        }
        else if(password.length<7){
            return res.render('forget',{
                message: 'Password length is short....'
            });
        }
        return res.render('forget',{
            message: JSON.stringify(results) 
        })
        
        db.query('INSERT INTO users SET ?',{name:name ,email:email,password:password},(error ,results)=>{
            if(error){
                console.log(error);
            }else{
                return res.render('forget',{
                    message: 'forget Ok....'
                });
            }
        })

    });
}