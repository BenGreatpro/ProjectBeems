const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).json("Access denied");
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json("Invalid Token");
    }
}
