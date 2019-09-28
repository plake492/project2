var db = require("../models");

module.exports = function(app) {
  app.get("/home", function(req, res) {
    db.Project.findAll({}).then(function(data) {
      res.render("index", { list: data });
    });
  });

  app.get("/viewpost/:id", function(req, res) {
    db.Project.findOne({ where: { id: req.params.id } }).then(function(data) {
      res.render("post", data.dataValues);
    });
  });

  app.get("/createproject", function(req, res) {
    res.render("createproject");
  });
  app.get("/", function(req, res) {
    res.render("signin");
  });
  app.get("/newprofile", function(req, res) {
    res.render("newprofile");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
