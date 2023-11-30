
// // /*const express = require("express");
// // const mysql = require("mysql");
// // const cors = require("cors");
// // const jwt = require("jsonwebtoken");
// // const cookieParser = require("cookie-parser");
// // const { check, validationResult } = require("express-validator");
// // const crypto = require("crypto");*/

// // import express from 'express'
// // import userauthRoute from './routes/userauth.js'
// // import cors from 'cors';

// // const app = express();

// // app.use('/routes/userauth',userauthRoute)
// // // app.use('/routes/userauth', (req, res, next) => {
// // //     console.log('Received request at /routes/userauth');
// // //     next(); // Pass control to the next middleware or route handler
// // //     console.log('next',next())
// // //   }, userauthRoute);
  

// // app.use(cors({
// //     origin: 'http://localhost:3000',
// //     methods: ['GET', 'POST'],
// //     credentials: true,
// //     optionsSuccessStatus: 204,
// //   }));
  


// // app.listen(8080, ()=>
// //     console.log('Server Started on 8080')

// // )
// import express from 'express';
// import userauthRoute from './routes/userauth.js';
// import cors from 'cors';

// const app = express();

// // Use the cors middleware
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//     credentials: true,
//     optionsSuccessStatus: 204,
// }));

// // Parse incoming JSON requests
// app.use(express.json());

// // Use the userauth route
// app.use('/routes/userauth', userauthRoute);

// // Handle unknown routes
// app.use((req, res) => {
//     res.status(404).json({ error: 'Not Found' });
// });

// // Handle errors
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Internal Server Error' });
// });

// app.listen(8080, () => {
//     console.log('Server Started on 8080');
// });

import express from 'express';
import userauthRoute from './routes/userauth.js';
import cors from 'cors';

const app = express();

// Use the cors middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 204,
}));

// Parse incoming JSON requests
app.use(express.json());

// Use the userauth route
app.use('/routes/userauth', userauthRoute);

// Handle root URL and root URL with trailing slash
// app.get(['/', '/routes/userauth'], (req, res) => {
//     res.status(200).json({ message: 'Welcome to the API' });
// });

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(8080, () => {
    console.log('Server Started on 8080');
});
