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
    console.log(req.body);
    db.Project.create(req.body).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Delete an example by id
  app.delete("/api/projects/:id", function(req, res) {
    db.Project.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
