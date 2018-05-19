
var express = require("express");

var router = express.Router();

var taco = require("../models/tacos.js");


router.get("/", function(req, res){
    taco.all(function(data){
        var devoured = [];
        var notDevoured = [];
        for (var i = 0; i < data.length; i++){
            if (data[i].devoured == 0) {
                notDevoured.push(data[i]);
            }
            if (data[i].devoured == 1) {
                devoured.push(data[i]);
            }
        }
        var data = {devoured, notDevoured};
        console.log(data);
        res.render("index", data);
    });
});

router.post("/api/tacos", function(req, res){
    taco.create(["taco_name", "devoured"], [req.body.taco_name, req.body.devoured], function(result){
        res.json({ id: result.insertId});
    });
});

router.put("/api/tacos/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition ", condition);

    taco.update(
        {
            devoured: req.body.devoured
    },
    condition,
    function(result) {
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    }
  );
});

module.exports = router;