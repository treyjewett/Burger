// List dependencies
const connection = require('./connection.js');

const orm = {
    selectWhere: function (selectAll, insertOne, updateOne) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(queryString, [selectAll, insertOne, updateOne], function (err, result) {
            if (err) throw err;
            return result;
        });
    }
};

module.exports = orm;