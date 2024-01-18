// import jwt from 'jsonwebtoken';

// const secretKey = "8325731cde8293dbe25e329450ae2aa60486002f6eba23faacb69a9a18952e43";

// const verifyUser = (req, res, next) => {

//     console.log("req.headers" , req.headers);
//     const bearerHeader = req.headers['authorization'];
//     console.log("bearerHeader" , bearerHeader, )

//     // if (bearerHeader) {
//     //     const token = bearerHeader.split(' ')[1];
//     //     // Rest of your code using 'token'
//     // } else {
//     //     // Handle the case when 'bearerHeader' is undefined
//     //     console.error('Bearer header is undefined');
//     // }

//     if (!bearerHeader) {
//         return res.status(401).json({ Error: "Authentication failed. Token not provided." });
//     }

//     const token = bearerHeader.split(' ')[1];



//     //const token = bearerHeader.split(' ')[1];
//     console.log(token, "token")


//     if (!token) {
//         return res.json({ Error: "You are not authenticated" })
//     } else {
//         jwt.verify(token, secretKey, (err, decoded) => {
//             if (err) {
//                 return res.json({ Error: "Token is not correct" })
//             } else {
//                 req.email = decoded.email,
//                     req.password = decoded.password;
//                 next();
//             }
//         })
//     }
// }

// export default verifyUser

import jwt from 'jsonwebtoken';

const secretKey = "8325731cde8293dbe25e329450ae2aa60486002f6eba23faacb69a9a18952e43";

const verifyUser = (req, res, next) => {
    console.log('in verifyUser')
    console.log("req.headers", req.headers);

    // Try to extract the token from the 'Authorization' header
    const bearerHeader = req.headers['authorization'];
    let token;

    if (bearerHeader) {
        token = bearerHeader.split(' ')[1];
    } else {
        // If 'Authorization' header is not present, try to extract the token from the 'Cookie' header
        const cookieHeader = req.headers['cookie'];
        console.log('cookieHeader' , cookieHeader)
        if (cookieHeader) {
            const tokenMatch = cookieHeader.match(/token=([^;]+)/);
            token = tokenMatch && tokenMatch[1];
        }
    }

    console.log("token", token);

    if (!token) {
        return res.status(401).json({ Error: "Authentication failed. Token not provided." });
    } else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.log('Error is there' , err);
                return res.status(401).json({ Error: "Token is not correct" });
            } else {
                console.log('decoded' , decoded);
                req.email = decoded.email;
                req.password = decoded.password;
                next();
            }
        });
    }
}

export default verifyUser;