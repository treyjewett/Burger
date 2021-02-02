// List dependencies here.
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create the routes for the app and set up logic within the routes required.
// Get route to retrieve all burgers within the table.
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// Post route to add a new buger to the table.
router.post('api/burgers', function(req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

// Put route to update whether a burger has been devoured or not.
router.put('api/burgers/:id', function(req, res) {
    var eaten = 'id = ' + req.params.id;
    console.log('eaten', eaten);
    burger.update({ devoured: req.body.devoured }, eaten, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
    console.log('updated');
})

// Export the routes for server.js to use.
module.exports = router;