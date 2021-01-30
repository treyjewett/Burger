// List dependencies here.
var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        orm.insert('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export at the end.
module.exports = burger;