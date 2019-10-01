const db = require("../models");
const path = require("path");
const auth = require("../config/auth");

module.exports = function(app) {
  app.get("/home", function(req, res) {
    db.Project.findAll({}).then(function(data) {
      res.render("index", {
        list: data
      });
    });
  });

  // ???
  app.get("/viewpost/:id", function(req, res) {
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.render("post", data.dataValues);
    });
  });

  app.get("/home", function(req, res) {
    res.render("index");
  });

  app.get("/createproject", function(req, res) {
    res.render("createproject");
  });

  app.get("/", function(req, res) {
    res.render("signin");
  });

  app.get("/index", function(req, res) {
    res.render("index");
  });

  // app.get("/post", function (req, res) {
  //   res.render("post");
  // });

  app.get("/newprofile", function(req, res) {
    res.render("newprofile");
  });

  app.get("/signin", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("newprofile");
  });

  app.get("/members", auth, function(req, res) {
    res.render("members");
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
