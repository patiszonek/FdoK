const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('x-auth');

    if (!token) {
        req.isAuth = false;
        return next();
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        req.isAuth = false;
        return next();
    }

    if (!decoded) {
        req.isAuth = false;
        return next();

    }

    req.isAuth = true;
    req.userId = decoded.userId;
    next();
}

module.exports = {
    authenticate
}