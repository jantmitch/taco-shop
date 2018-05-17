var express = require("express");

var router = express.Router();

var taco = require("../models/tacos.js");


router.get("/", function(req, res){
    taco.all(function(data){
        var object = {
            tacos: data
        };
        console.log(object);
        res.render("index", object);
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