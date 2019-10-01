// const db = require("../models");
// const path = require("path");
// const auth = require("../config/auth");

// module.exports = function(app) {
//   app.get("/home", function(req, res) {
//     db.Project.findAll({}).then(function(data) {
//       res.render("index", {
//         list: data
//       });
//     });
//   });

//   // ???
//   app.get("/viewpost/:id", function(req, res) {
//     db.Project.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(data) {
//       res.render("post", data.dataValues);
//     });
//   });

//   app.get("/home", function(req, res) {
//     res.render("index");
//   });

//   app.get("/createproject", function(req, res) {
//     res.render("createproject");
//   });

//   app.get("/", function(req, res) {
//     res.render("signin");
//   });

//   app.get("/index", function(req, res) {
//     res.render("index");
//   });

//   // app.get("/post", function (req, res) {
//   //   res.render("post");
//   // });

//   app.get("/newprofile", function(req, res) {
//     res.render("newprofile");
//   });

//   app.get("/signin", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/");
//     }
//     res.render("newprofile");
//   });

//   app.get("/members", auth, function(req, res) {
//     res.render("members");
//   });

//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };

const db = require("../models");
const auth = require("../config/auth");
module.exports = function(app) {
  // homepage is routed to signin
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/index");
    }
    res.render("signin");
  });
  // grabs all projects in db, then send the info to the index page
  app.get("/home", function(req, res) {
    db.Project.findAll({}).then(function(data) {
      res.render("index", {
        list: data
      });
    });
  });

  // grabs the id in the db, send the info to the viewpost page with the id paramater
  app.get("/viewpost/:id", function(req, res) {
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.render("post", data.dataValues);
    });
  });

  // route for the home page
  app.get("/home", function(req, res) {
    res.render("index");
  });

  // route for creating a project
  app.get("/createproject", function(req, res) {
    res.render("createproject");
  });

  // app.get("/post", function (req, res) {
  //   res.render("post");
  // });

  // route for registering new users
  app.get("/newprofile", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("newprofile");
  });

  // route for login
  // app.get("/signin", function (req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   } else {
  //     res.render("signin");
  //   }
  // });

  // when member page loads, the user is auth
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
