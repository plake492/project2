const db = require("../models");

module.exports = function(app) {

    app.get("/api/places", function(req, res) {
        db.Places.findAll({}).then(function(result) {
          res.json(result);
        });
    });

    app.post("/api/places", function(req, res) {
        db.Places.create(req.body).then(function(result) {
          res.json(result);
        });
    });
}
