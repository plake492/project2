const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));

// Dashboard
router.get("/", ensureAuthenticated, (req, res) =>
  res.render("./views/index", {
    user: req.user
  })
);

module.exports = router;
