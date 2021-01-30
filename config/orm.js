// List dependencies
var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

// Helper function to conver object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hawOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}

var orm = {
    
}

module.exports = orm;