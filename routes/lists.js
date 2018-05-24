const express = require('express');
var listRouter = express.Router();

const db = require('../models');

listRouter.route('/')
    // INDEX route - return all lists
    .get((req,res) => {
        db.List.find()
            .then(lists => {
                res.json(lists);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .post((req,res) => {

    });

module.exports = listRouter;