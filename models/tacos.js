var orm = require("../config/orm.js");

var tacos = {
    all: function(cb){
        orm.all("tacos", function(response){
            cb(response);
        });
    },
    create: function(cols, vals, cb){
        orm.create("tacos", cols, vals, function(response){
            cb(response);
        });
    },
    update: function(objColVals, condition,cb){
        orm.update("tacos", objColVals, condition, function(response){
            cb(response);
        })
    }
};

module.exports = tacos;