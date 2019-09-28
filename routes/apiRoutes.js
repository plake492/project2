const db = require("../models");
const passport = require("../config/passport"); 

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

  //newprofile
  app.post("/api/signup", function(req, res) {
    db.User.create(
      req.body
      ).then(function() {
      res.redirect(307, "/api/signin"); 
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/api/signup", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Route to login 
  app.post("/api/signin", passport.authenticate("local"), function(req, res) {
    res.json("/members"); 
  }); 

  app.get("api/user_data", function(req, res) {
    if(!req.user) {
      res.json({})
    }
    else {
      res.json({
        username: req.username, 
        id: req.user.id
      });
    }
  });

};
