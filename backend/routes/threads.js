import express from 'express';
import mysql from 'mysql';
//add comment
const app = express();
const router = express();
app.use(express.json);
//include comments
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stud_database'
})

router.post('/createthread', (req, res) => {
    const { UIN, CourseId, ThreadStartDate, ThreadHeading, IsDelete } = req.body;
    console.log(req.body.UIN);
    const sql = 'insert into threads(UIN, ThreadStartDate, ThreadHeading, IsDelete) values (?,?,?,?)';
    const values = [UIN,ThreadStartDate, ThreadHeading, IsDelete]
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

router.get('/readallthreads-coursename' , (req,res) => {
    const sql = `select threads.UIN,courses.CourseName,threads.ThreadId,threads.ThreadStartdate,threads.ThreadHeading
                 from threads inner join courses
                 where threads.CourseId = courses.CourseId`;
    
    db.query(sql , (err,data) => {
        if(err){
            console.log(err);
            return res.status(500).json ({Error : "Datebase Error"})
        }
        return res.json(data);
    })
})

// router.get('/readallthreads-UIN/:UIN', (req, res) => {
//     const { UIN } = req.params;
//     const { CourseId, ThreadId, ThreadStartDate, ThreadHeading, IsDelete } = req.body;
//     const sql = 'select * from threads where UIN = ?';
//     //const values = {CourseId , ThreadId , ThreadStartDate , ThreadHeading , IsDelete , UIN };

//     db.query(sql, [UIN], (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({ Error: "Database Error" });
//         }
//         return res.json(data);
//     })
// })
router.get('/readthread/:UIN', (req,res) => {
    console.log('in readthread/:uin')
    const{UIN} = req.params;
    const{CourseId , ThreadId,ThreadStartDate , ThreadHeading} = req.body;
    const sql= `select UIN,CourseId , ThreadId , ThreadStartDate , ThreadHeading from threads 
                where UIN in (select UIN from users where role = 'Teacher')`;

    db.query(sql , [UIN] , (err,data) => {
        if(err){
            console.log(err)
            return res.status(500).json({Error :"Database Error"})
        }
        console.log('data' , data)
        return res.json(data)
        
    })
})


router.put('/updatethreads-UIN/:UIN', (req, res) => {
    console.log('in updatethtreads-UIN route')
    const { UIN } = req.params;
    console.log('uin', UIN)
    const { CourseId, ThreadId, ThreadStartDate, ThreadHeading, IsDelete } = req.body;
    //const sql = 'update threads set CourseId=?,ThreadStartDate =? , ThreadHeading =? , IsDelete =? where UIN=? and CourseId = ? and ThreadId=?';
    const sql = `
    UPDATE threads
    INNER JOIN courses ON threads.CourseId = courses.CourseId
    SET
      threads.ThreadStartDate = ?,
      threads.ThreadHeading = ?,
      threads.IsDelete = ?,
      courses.CourseName = ?
    WHERE
      threads.UIN = ? AND
      threads.ThreadId = ? AND
      threads.CourseId = ?
  `;

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