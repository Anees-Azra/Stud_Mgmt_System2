import express from 'express';
import mysql from 'mysql';
import verifyUser from '../middleware/verifyUser.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { check, validationResult } from 'express-validator';
import crypto from 'crypto';

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stud_database'
})

const secretKey = "8325731cde8293dbe25e329450ae2aa60486002f6eba23faacb69a9a18952e43";

router.post('/register', (req, res) => {
    console.log('in register route')
    const { Fullname, Dob, EmailId, Password, Role, RoleId, UIN } = req.body;
    console.log('req.body', req.body)
    const sql = `INSERT INTO users (Fullname,Dob,EmailId,Password,
        Role,Roleid,UIN) VALUES(?,?,?,?,?,?,?)`;
    const values = [Fullname, Dob, EmailId, Password, 'Student', 1, UIN]
    console.log('values', values)
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(values);
    })
})

router.post('/login', (req, res) => {
    console.log('in login route')
    const sql = `SELECT * FROM users WHERE EmailId=? AND Password=?`;
    console.log("request in login route", req.body)
    console.log("email", req.body.emailid)
    console.log("password", req.body.password)
    console.log("secretkey",secretKey)
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
                console.log( 'data in login route',data)
                if (data.length > 0) {
                    const email = data[0].EmailId;
                    console.log(email)
                    const password = data[0].Password;
                    console.log(password)
                    const role = data[0].Role;
                    console.log(role)
                    const token = jwt.sign({ email, password }, secretKey)
                    res.cookie('token', token, { secure: true });
                    //res.cookie('token', token)
                    console.log('token', token)
                    //return res.json('Success');
                    //return res.json({
                    //     "Message": "Login successfull",
                    //     "token": token,
                    //})
                    return res.json({
                        Message: "Login successful",
                        Role: data[0].Role,
                        Token: token
                    });
                }
                else {
                    return res.json('Failure')
                }
            }
        })
    } catch (e) {
        console.log("error")
        console.error(e)
    }
})



router.get('/', verifyUser, (req, res) => {
    return res.json({ Status: "Success", email: req.email })
})


router.get('/logout', (req, res) => {

    console.log('in logout route token is', req.body)
    //res.clearCookie('token');
    res.clearCookie('token', { path: '/', domain: 'localhost' }).send();
    console.log('now token...', res.body.token)
    return res.json({ Status: "Success" });
})

export default router
