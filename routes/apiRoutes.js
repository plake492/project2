var db = require("../models");
var passport = require("../config/passport");
var bcrypt = require("bcryptjs");
const saltRounds = 1;

module.exports = function(app) {
  // Get all examples

  // Create a new example
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("../views/index");
  });
  app.post("/api/users", function(req, res) {
    // console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      db.User.create({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        country: req.body.country
      })
        .then(function() {
          res.redirect(307, "/api/login");
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    });
  });

  app.get("/api/projects", function(req, res) {
    db.Project.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/api/projects", function(req, res) {
    db.Project.create(req.body).then(function(dbExample) {
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

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // app.post("/api/users", function(req, res) {
  //   db.User.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
