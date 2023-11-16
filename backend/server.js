
import express from 'express';
import mysql  from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { check, validationResult } from 'express-validator';
import crypto from 'crypto';

const app = express();
app.use(cors({
    origin : ["http://localhost:3000"],
    methods:["POST","GET"],
    credentials: true
}));
app.use(express.json());
//const{check,validationResult} = require('express-validator');

app.use(cookieParser());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password:'password',
    database:'stud_database'
})


//const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

app.post('/register', (req,res) => {
    console.log('in register route')
    const sql = `INSERT INTO users (fullname,dob,emailid,password,
        role,roleid,uin) VALUES(?)`;
    const values =[
        req.body.fullname,
        req.body.dob, 
        req.body.emailid, 
        req.body.password, 
        'Student', 
        1, 
        req.body.uin, ls
    ]
    console.log(values)
    db.query(sql,[values], (err,data) => {
        if(err){
            console.log(err)
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(values);
    })
})

app.post('/login',[
    check('emailid',"Email Length Error").isEmail().isLength({min:10,max:30}),
    check('password',"Password length 8-10").isLength({min:8,max:20})
]
, (req,res) => {
    console.log('in login route')
    const sql = `SELECT * FROM users WHERE emailid=? AND password=?`;
   
    console.log("request in login route", req.body)

    try {
        db.query(sql,[req.body.emailid,req.body.password], (err,data) => {
            const errors= validationResult(req)
            if(!errors.isEmpty()){
                console.log(errors)
                return res.json(errors)
            }else{
                if(err){
                    console.log(err)
                    return res.status(500).json({ error: "Database error" });
                }
                console.log(data, 'data in login route')
                if(data.length>0){
                    const email=data[0].emailid;
                    console.log(email)
                    const password=data[0].password;
                    console.log(password)
                    const token = jwt.sign({email,password},secretKey)
                  
                    res.cookie('token',token)
                    console.log('token',token)
                    return res.json('Success')
                }
                
                else{
                    return res.json('Failure')
                }
            }
    
    
            console.log(email,password)
                console.log(token)
            
        })
    } catch(e) {
        console.log("error")
        console.error(e)
    }
   
})
const verifyUser = (req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({Error:"You are not authenticated"})
    }else{
        jwt.verify(token,secretKey,(err,decoded)=>{
            if(err){
                return res.json({Error:"Token is not correct"}) 
            }else{
                req.email=decoded.email,
                req.password=decoded.password;
                next();
            }
        } )
    }

}

app.get('/',verifyUser,(req,res)=>
{
    return res.json({Status : "Success", email:res.email,password:res.password})
})


app.get('/logout',(req,res) => {

    console.log('in logout route token is',req.body)
    //res.clearCookie('token');
    res.clearCookie('token', {path: '/', domain: 'localhost'}).send();
    console.log('now token...',res.body.token)
    return res.json({Status:"Success"});
})





app.listen(8080, ()=>
    console.log('Server Started on 8080')

)
