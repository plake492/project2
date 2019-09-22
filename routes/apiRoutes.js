var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/projects", function(req, res) {
    db.Project.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/projects", function(req, res) {
    db.Project.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/projects/:id", function(req, res) {
    db.Project.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
  // Added by Patrick
  app.get("/", function(req, res) {
    res.render("index", { list: db.projects });
    console.log(db);
  });
  app.get("/viewpost/:id", function(req, res) {
    res.render("post", db[req.params.id]);
  });
  app.get("/createproject", function(req, res) {
    res.render("createproject", { list: db });
  });
};
