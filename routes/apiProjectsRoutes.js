var db = require("../models");

module.exports = function(app) {
  app.get("/api/projects", function(req, res) {
    db.Project.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.json(dbExamples);
    });
  });

  app.get("/api/projects/:id", function(req, res) {
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/api/projects", function(req, res) {
    db.Project.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.put("/api/projects", function(req, res) {
    db.Project.update(
      {
        peepleNeeded: req.body.peopleNeeded
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/projects/:id", function(req, res) {
    console.log(res);
    db.Project.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
