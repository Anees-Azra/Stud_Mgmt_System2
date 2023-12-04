import express from 'express';
import mysql from 'mysql';

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    passwod : '',
    database : 'stud_database'
})

const router = express();
const app = express();
app.use(express.json);

router.post('/createthread' , (req,res) =>{
    const {UIN , courseId , threadId , threadStartDate , threadHeading} = req.body;
    const sql = 'insert into threads (UIN, courseId , threadId , threadStartDate , threadHeading)values ( ?,?,?,?,?)';
    const values = [UIN , courseId , threadId , threadStartDate , threadHeading]
    db.query(sql, values, (err , result) => {
        if (err){
            console.log(err);
            return res.status(500).json({Error : 'Databaes Error'})
        }
        return res.json(values);
    })

                
})
