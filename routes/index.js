var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const model = {
    title: "Developing Nodejs on Azure",
    message: process.env.MESSAGE || "This is in QA #Production stage!"
  };
  res.render("index", model);
});

module.exports = router;
