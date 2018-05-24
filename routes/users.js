const express = require('express');
var userRouter = express.Router();

const db = require('../models');

userRouter.route('/')
    .get((req,res) => {
        db.User.find()
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                console.log(err);
            });
    });

module.exports = userRouter;