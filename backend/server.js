import express from 'express';
import userauthRoute from './routes/userauth.js';
import userRoute from './routes/user.js';
import coursesRoute from './routes/courses.js'
import rolesRoute from './routes/roles.js';
import threadsRoute from './routes/threads.js'
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204,
}));

// Parse incoming JSON requests
app.use(express.json());

// Use the userauth route
app.use('/routes/userauth', userauthRoute);
app.use('/routes/user', userRoute);
app.use('/routes/courses', coursesRoute);
app.use('/routes/roles', rolesRoute);
app.use('/routes/threads', threadsRoute);


// Handle root URL and root URL with trailing slash
// app.get(['/', '/routes/userauth'], (req, res) => {
//     res.status(200).json({ message: 'Welcome to the API' });
// });


app.listen(8080, () => {
    console.log('Server Started on 8080');
});