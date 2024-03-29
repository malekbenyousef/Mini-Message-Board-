const express = require('express');
const router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.route('/new')
  .get(function(req, res, next) {
    res.render('form', { title: 'New Message' });
  })
  .post(function(req, res, next) {
    let { user, text } = req.body;
    messages.push({ user, text, added: new Date() });
    res.redirect('/');
  });

module.exports = router;

