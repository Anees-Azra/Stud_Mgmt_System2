import express from 'express';
import mysql from 'mysql';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { check, validationResult } from 'express-validator';
import crypto from 'crypto';

const router = express.Router();
// router.use(cors({
//     origin : ["http://localhost:3000"],
//     methods:["POST","GET"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));
router.use(express.json());
//const{check,validationResult} = require('express-validator');

router.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stud_database'
})


//const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

router.post('/register', (req, res) => {
    console.log('in register route')
    const {Fullname , Dob , EmailId ,Password , Role , RoleId ,UIN} = req.body;
    console.log('req.body' , req.body)
    const sql = `INSERT INTO users (Fullname,Dob,EmailId,Password,
        Role,Roleid,UIN) VALUES(?,?,?,?,?,?,?)`;
    const values = [ Fullname,Dob,EmailId,Password,'Student',1,UIN ]
    console.log('values' , values)
    db.query(sql, values , (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(values);
    })
})

router.post('/login', [
    check('emailid', "Email Length Error").isEmail().isLength({ min: 8, max: 30 }),
    check('password', "Password length 8-10").isLength({ min: 8, max: 20 })
]
    , (req, res) => {
        console.log('in login route')
        const sql = `SELECT * FROM users WHERE EmailId=? AND Password=?`;

        console.log("request in login route", req.body)
        console.log("email", req.body.emailid)

        try {
            db.query(sql, [req.body.emailid, req.body.password], (err, data) => {
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    console.log(errors)
                    return res.json(errors)
                } else {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({ error: "Database error" });
                    }
                    console.log(data, 'data in login route')
                    if (data.length > 0) {
                        const email = data[0].EmailId;
                        console.log(email)
                        const password = data[0].Password;
                        console.log(password)
                        const token = jwt.sign({ email, password }, secretKey)

                        res.cookie('token', token)
                        console.log('token', token)
                        return res.json('Success');
                        // return res.json({
                        //     "Message": "Login successfull",
                        //     "token": token
                        //   })
                    }

                    else {
                        return res.json('Failure')
                    }
                }
                console.log(email, password)
                console.log(token)
            })
        } catch (e) {
            console.log("error")
            console.error(e)
        }

    })
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are not authenticated" })
    } else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.json({ Error: "Token is not correct" })
            } else {
                req.email = decoded.email,
                    req.password = decoded.password;
                next();
            }
        })
    }

}

router.get('/', verifyUser, (req, res) => {
    return res.json({ Status: "Success", email: res.email, password: res.password })
})


router.get('/logout', (req, res) => {

    console.log('in logout route token is', req.body)
    //res.clearCookie('token');
    res.clearCookie('token', { path: '/', domain: 'localhost' }).send();
    console.log('now token...', res.body.token)
    return res.json({ Status: "Success" });
})

export default router
