// List dependencies here.
var express = require('express');
var burger = require('../models/burger.js');

// Create the router for the app.
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// Export the router.
module.exports = router;