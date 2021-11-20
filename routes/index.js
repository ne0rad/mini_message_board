var express = require('express');
var router = express.Router();

function getDate() {
  return new Date().toISOString().
    replace(/T/, ' ').      // replace T with a space
    replace(/\..+/, '')     // delete the dot and everything after
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: getDate()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: getDate()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', function (req, res, next) {
  let newText = req.body.message;
  let newUser = req.body.name;

  if (newText.length > 0 && newUser.length > 0)

    messages.push({
      text: req.body.message,
      user: req.body.name,
      added: getDate()
    });

  res.redirect('/');
})

module.exports = router;
