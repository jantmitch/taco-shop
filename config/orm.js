var connection = require("./connection.js");


function printQuestMarks(num) {
    var arr = [];
    for(var i = 0; i < arr.length; i++){
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob){
    var arr = [];

    for (var key in ob){
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob,key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    all: function(tableInfo, cb) {
        var queryString = "SELECT * FROM " + tableInfo + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, val, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    update: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        conneciton.query(queryString, function(err,result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;