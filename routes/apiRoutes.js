const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples

  // app.post("/api/users", function (req, res) {
  //   // console.log(req.body);
  //   bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
  //     db.User.create({
  //         username: req.body.username,
  //         password: hash,
  //         email: req.body.email,
  //         name: req.body.name,
  //         address: req.body.address,
  //         addressLine2: req.body.addressLine2,
  //         city: req.body.city,
  //         state: req.body.state,
  //         zipCode: req.body.zipCode,
  //         country: req.body.country
  //       })
  //       .then(function () {
  //         res.redirect(307, "/api/login");
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //         res.json(err);
  //       });
  //   });
  // });

  app.get("/api/projects", function(req, res) {
    db.Project.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // create a project in db
  app.post("/api/projects", function(req, res) {
    db.Project.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // delete a certain project in db
  app.delete("/api/projects/:id", function(req, res) {
    console.log(res);
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // create a new user in db
  app.post("/api/signup", function(req, res) {
    db.User.create(req.body)
      .then(function() {
        res.redirect(307, "/api/signin");
      })
      .catch(function(err) {
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
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });
};
