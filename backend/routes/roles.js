import express from 'express';
import mysql from 'mysql';
import { createRoutesFromElements } from 'react-router-dom';

const app = express();
const router = express();
app.use(express.json);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stud_database'
})

router.post('/createrole', (req, res) => {
    const { RoleId, RoleName, IsDelete } = req.body;
    const sql = 'insert into roles(RoleId , RoleName , isDelete) values(?,?,?)';
    const values = [RoleId, RoleName, IsDelete];
    console.log('values', values);

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log('error', err);
            return res.status(500).json({ Message: 'Database Error' });
        }
        return res.json(values);

    })
})

router.get('/readallroles', (req, res) => {
    const sql = 'select * from roles';
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: 'Database Error' })
        }
        return res.json(data)
    })
})

router.get('/readrole/:RoleId', (req, res) => {
    const { RoleId } = req.params;
    console.log('RoleId :', RoleId)
    const sql = 'select * from roles where RoleId = ?';

    db.query(sql, [RoleId], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: 'Database Error' });
        }
        return res.json(data)
    })
})


router.get('/readrole/uin/:UIN', (req, res) => {
    const { UIN } = req.params;
    console.log('uin', UIN);
    const sql = 'SELECT Role FROM users WHERE UIN = ?';
    console.log('Executing SQL:', sql, [String(UIN)]);
      
    db.query(sql, [String(UIN)], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ Error: 'Database Error' });
      } else {
        console.log('data:', data); // Log the retrieved data for debugging
  
        if (data && data.length > 0 && data[0].Role) {
          const role = data[0].Role;
          return res.json({ Role: role });
        } else {
          return res.status(404).json({ Error: 'User not found or Role is undefined' });
        }
      }
    });
  });


router.put('/updaterole/:RoleId', (req, res) => {
    const { RoleId } = req.params;
    console.log('RoleId', RoleId);
    const { RoleName, IsDelete } = req.body;
    console.log('req.body', req.body)
    const sql = 'update roles set RoleName = ?, IsDelete = ? where RoleId =?';
    const values = [RoleName, IsDelete, RoleId];
    console.log('values', values);

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: 'Database Error' });
        }

        if (result.affectedRows === 1) {
            return res.status(200).json('Role Updated Sucessfully')
        }
        return res.json({ Message: 'Role  Not Updated successfully' })
    })
})

router.delete('/deleterole/:RoleId', (req, res) => {
    const { RoleId } = req.params;
    const sql = 'delete from roles where RoleId = ?';

    db.query(sql, [RoleId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: 'Database Error' });
        }
        return res.json({ Message: 'Role Deleted Successfully' })
    })
})
export default router;