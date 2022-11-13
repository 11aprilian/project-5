const express = require("express");
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(400).json({
        status : res.statusCode,
        message : "Access Denied!"
    })
    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verified 

    }catch(err){
        res.status(400).json({
            status : res.statusCode,
            message : "Invalid Token!"
        })
    }
    next()
}
module.exports = verifyToken
