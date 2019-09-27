const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');

// Login page
router.get("/login", forwardAuthenticated, (req, res) => res.send("Login"));

// register page
router.get("/register", forwardAuthenticated, (req, res) => res.send("Register"));

router.post('/register', (req, res) => {
    const { username, password, email, name, address } = req.body;
    let errors = [];

    if (!username || !password || !email || !name || !address) {
        errors.push({ msg: 'Please enter all fields' });
      }
    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
      }
    if (errors.length > 0) {
        res.render('register', {
          errors,
          username,
          password,
          email,
          name,
          address
        });
    } else {
        User.findOne({ email: email }).then(user => {
          if (user) {
            errors.push({ msg: 'Email already exists' });
            res.render('register', {
                errors,
                username,
                password,
                email,
                name,
                address
            });
        } else {
            const newUser = new User({
              username,
              email,
              password,
              name,
              address
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      req.flash(
                        'success_msg',
                        'You are now registered and can log in'
                      );
                      res.redirect('/users/login');
                    })
                    .catch(err => console.log(err));
                });
              });
            }
          });
        }
      });
      router.post('/login', (req, res, next) => {
        passport.authenticate('local', {
          successRedirect: './views/index',
          failureRedirect: './views/signin',
          failureFlash: true
        })(req, res, next);
      });
      
      
    
    

module.exports = router;
