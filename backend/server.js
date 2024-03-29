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

app.use(express.json());

app.use('/routes/userauth', userauthRoute);
app.use('/routes/user', userRoute);
app.use('/routes/courses', coursesRoute);
app.use('/routes/roles', rolesRoute);
app.use('/routes/threads', threadsRoute);

app.listen(8080, () => {
    console.log('Server Started on 8080');
});

