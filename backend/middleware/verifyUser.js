import jwt from 'jsonwebtoken';

const secretKey = "8325731cde8293dbe25e329450ae2aa60486002f6eba23faacb69a9a18952e43";

const verifyUser = (req, res, next) => {

    console.log(req.headers);
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader, "bearerHeader")

    // if (bearerHeader) {
    //     const token = bearerHeader.split(' ')[1];
    //     // Rest of your code using 'token'
    // } else {
    //     // Handle the case when 'bearerHeader' is undefined
    //     console.error('Bearer header is undefined');
    // }

    if (!bearerHeader) {
        return res.status(402).json({ Error: "Authentication failed. Token not provided." });
    }

    const token = bearerHeader.split(' ')[1];



    //const token = bearerHeader.split(' ')[1];
    console.log(token, "token")


    if (!token) {
        return res.json({ Error: "You are not authenticated" })
    } else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.json({ Error: "Token is not correct" })
            } else {
                req.email = decoded.email,
                    req.password = decoded.password;
                next();
            }
        })
    }
}

export default verifyUser