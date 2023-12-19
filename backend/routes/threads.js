import express from 'express';
import mysql from 'mysql';
import verifyUser from '../middleware/verifyUser.js'

const app = express();
const router = express();
app.use(express.json);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stud_database'
})

router.post('/createthread',verifyUser, (req, res) => {
    const { UIN, CourseId, ThreadId, ThreadStartDate, ThreadHeading, IsDelete } = req.body;
    console.log(req.body.UIN);
    const sql = 'insert into threads(UIN, CourseId, ThreadId, ThreadStartDate, ThreadHeading, IsDelete) values (?,?,?,?,?,?)';
    const values = [UIN, CourseId, ThreadId, ThreadStartDate, ThreadHeading, IsDelete]
    console.log(values);
    console.log('query', sql);
    console.log('values', values);

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: 'Database Error' });
        }
        return res.json('Thread Created');
    })
})

router.get('/readallthreads', (req, res) => {
    const sql = 'select * from threads';

    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: 'Database Error' });
        }
        return res.json(data);
    })
})

router.get('/readallthreads-UIN/:UIN', (req, res) => {
    const { UIN } = req.params;
    const { CourseId, ThreadId, ThreadStartDate, ThreadHeading, IsDelete } = req.body;
    const sql = 'select * from threads where UIN = ?';
    //const values = {CourseId , ThreadId , ThreadStartDate , ThreadHeading , IsDelete , UIN };

    db.query(sql, [UIN], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: "Database Error" });
        }
        return res.json(data);
    })
})

router.put('/updatethreads-UIN/:UIN', (req, res) => {
    console.log('in updatethtreads-UIN route')
    const { UIN } = req.params;
    console.log('uin', UIN)
    const { CourseId, ThreadId, ThreadStartDate, ThreadHeading, IsDelete } = req.body;
    const sql = 'update threads set ThreadStartDate =? , ThreadHeading =? , IsDelete =? where UIN=? and CourseId = ? and ThreadId=?';
    const values = [ThreadStartDate, ThreadHeading, 0, UIN, CourseId, ThreadId,];
    console.log('sql query', sql)
    console.log('values', values)
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: "Database Error" });
        }

        if (result.affectedRows === 1) {
            return res.json({ Message: "Thread Updated Successfully" });
        }
    })
})
export default router;