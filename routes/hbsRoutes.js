var db = require("../models");

module.exports = function(app) {
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Project.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/", function(req, res) {
    db.Project.findAll({}).then(function(data) {
      res.render("index", { list: data });
    });
  });

  app.get("/viewpost/:id", function(req, res) {
    db.Project.findOne({ where: { id: req.params.id } }).then(function(data) {
      res.render("post", data.dataValues);
      console.log(data.dataValues);
    });
  });

  app.get("/createproject", function(req, res) {
    res.render("createproject");
  });
  app.get("/signin", function(req, res) {
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
