import express from 'express';
import mysql from 'mysql';
import verifyUser from '../middleware/verifyUser.js'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stud_database'
})

const router = express();

const app = express();
app.use(express.json);

router.use(verifyUser);
router.post('/createcourse',(req, res) => {
    console.log('in createcourse route')
    const { CourseId, CourseName, IsDelete } = req.body;
    console.log('req body', req.body)
    const sql = 'insert into courses (CourseId , CourseName, IsDelete) values (?,?,?)';
    const values = [CourseId, CourseName, 0]
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
            IsDelete: 0,
            Message: 'Course created successfully'
        })

    })
    console.log('end of createcourse')
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

// router.put('/updatecourse/:CourseId', (req, res) => {
//     const courseId = parseInt(req.params.CourseId, 10);
//     const { CourseId } = req.params;
//     console.log('courseid', CourseId)
//     const { CourseName } = req.body;
//     const sql = 'update courses set CourseName=? where CourseId=?';
//     const values = [CourseName, courseId];
//     console.log('values', values);

//     db.query(sql, values, (err, result) => {
//         if (err) {
//             console.log(err)
//             return res.status(500).json({ Error: 'Database Error' });
//         }
//         if (result.affectedRows === 1) {
//             //return res.status(200).json({Message : 'Course Updated Successfully'});
//             return res.json({
//                 "CourseName": values[0],
//                 "CourseId": values[1]
//             });
//         }
//         return res.json({ Error: 'User Not Found' });
//     })

// })

// 

router.put('/updatecourse/:CourseId', (req, res) => {
    // Parse CourseId as an integer
    const courseId = parseInt(req.params.CourseId, 10);

    // Check if CourseId is a valid number
    if (isNaN(courseId)) {
        return res.status(400).json({ error: 'Invalid CourseId' });
    }

    const { CourseName } = req.body;

    // Check if CourseName is provided
    if (!CourseName) {
        return res.status(400).json({ error: 'CourseName is required for update' });
    }

    const sql = 'UPDATE courses SET CourseName=? WHERE CourseId=?';
    const values = [CourseName, courseId];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database Error' });
        }

        if (result.affectedRows === 1) {
            return res.json({
                CourseId: courseId,
                CourseName: CourseName,
                Message: 'Course Updated Successfully',
            });
        }

        return res.status(404).json({ error: 'Course Not Found' });
    });
});


router.delete('/deletecourse/:CourseId', (req, res) => {
    const { CourseId } = req.params;
    const { CourseName } = req.body;
    console.log('courseid', CourseId)
    const sql = 'delete from courses where CourseId = ?';
    const values = [CourseId];

    db.query(sql, [CourseId], (err, result) => {
        if (err) {
            return res.status(500).json({ Error: 'Database Error' });
        }
        return res.json({ Message: 'Course Deleted' })
    })
})

export default router