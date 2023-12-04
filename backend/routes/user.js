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

router.post('/createuser', (req, res) => {
   // Assuming your request body contains the necessary data for a new user
   const {UIN,Fullname, Dob, EmailId, Password, Role, Roleid ,IsDelete} = req.body;

   const sql = 'INSERT INTO users (UIN, Fullname, Dob, EmailId, Password, Role, Roleid,IsDelete) VALUES (?, ?, ?, ?, ?, ?, ?,?)';
   const values = [UIN,Fullname, Dob, EmailId, Password, Role, Roleid,IsDelete];

   db.query(sql, values, (err, result) => {
      if (err) {
         console.error(err);
         return res.status(500).json({ error: 'Database Error' });
      }
      // Assuming you want to     return the ID of the newly inserted user
      //return res.json({ userId: result.insertId });
      //   const insertedUserId = result.insertId;
      //  return res.json({ userId: insertedUserId, message: 'User created successfully' });
      return res.json({ values });
   });
});

router.get('/readuser/:UIN', (req, res) => {
   const { UIN } = req.params; // Extract UIN from the URL parameters
   const sql = 'SELECT * FROM users WHERE UIN = ?';

   db.query(sql, [UIN], (err, data) => {
      if (err) {
         console.error(err);
         return res.status(500).json({ error: "Database error" });
      }
      return res.json(data);
   });
});

router.put('/updateuser/:UIN', (req,res) =>{
   console.log('update user', req.body)
   const{ UIN } = req.params;
   const {Fullname,Dob,EmailId,Password,Role,RoleId,IsDelete} = req.body;
   const sql ='update users set Fullname=?,Dob=?,EmailId=?,Password=?,Role=?,RoleId=?,IsDelete=? where UIN=?';
   const values = [Fullname,Dob,EmailId,Password,Role,RoleId,IsDelete,UIN];

   db.query(sql, values,(err,result) => {
      if(err){
         console.log(err);
         return res.status(500).json({error : "Database Error"});
      }

      console.log('update result', result)

      if(result.affectedRows === 1){
         return res.status(200).json({Message : "User Updated Successfully"});
      }
      return res.status(500).json({Error : 'User Not Found'})

   })
})

router.delete('/deleteuser/:UIN',(req,res) => {
   const {UIN} = req.params;
   const sql = 'delete from users where UIN = ?';

   db.query(sql, [UIN] , (err,result) =>{
      if(err){
         console.log(err);
         return res.status(500).json({error: 'Database Error'})
      }
      return res.json({Message : 'User Deleted'})
   })
})
export default router;