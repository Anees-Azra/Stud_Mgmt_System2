import express from 'express';
import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stud_database'
})

const router = express();
const app = express();
app.use(express.json);

router.post('/createcourse', (req, res) => {
    const { CourseId, CourseName } = req.body;
    const sql = 'insert into courses (CourseId , CourseName) values (?,?)';
    const values = [CourseId, CourseName]
    console.log('values', values)
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log('Error', err);
            return res.status(500).json({ Error: 'Database Error' })
        }
        //return res.json(values);
        const createdCourseId = result.insertId;

        return res.json({
            CourseId: createdCourseId,
            CourseName: CourseName,
            Message: 'Course created successfully'
        })
    })
})

router.get('/readallcourses', (req, res) => {
    const sql = 'select * from courses';
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: "Database Error" });
        }
        return res.json(data)
    })
})

router.put('/updatecourse/:CourseId', (req, res) => {
    const { CourseId } = req.params;
    const { CourseName } = req.body;
    const sql = 'update courses set CourseName=? where CourseId=?';
    const values = [CourseName, CourseId];
    console.log('values', values);

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ Error: 'Database Error' });
        }
        if (result.affectedRows === 1) {
            //return res.status(200).json({Message : 'Course Updated Successfully'});
            return res.json({
                "CourseName": values[0],
                "CourseId": values[1]
            });
        }
        return res.json({ Error: 'User Not Found' });
    })

})

router.delete('/deletecourse/:CourseId', (req, res) => {
    const { CourseId } = req.params;
    const { CourseName } = req.body;
    console.log('courseid', CourseId)
    const sql = 'delete from courses where CourseId = ?';
    const values = [CourseId];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ Error: 'Database Error' });
        }
        return res.json({ Message: 'Course Deleted' })
    })
})

export default router;