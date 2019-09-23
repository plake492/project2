var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Project.findAll({}).then(function(dbExamples) {
      res.render("index", {
        title: "Welcome!",
        description: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Project.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Added by Patrick
  app.get("/", function(req, res) {
    res.render("index", { list: db.projects });
  });
  app.get("/viewpost/:id", function(req, res) {
    res.render("post", db[req.params.id]);
  });
  app.get("/createproject", function(req, res) {
    res.render("createproject", { list: db });
  });
  app.get("/signin", function(req, res) {
    res.render("signin", { list: db });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
