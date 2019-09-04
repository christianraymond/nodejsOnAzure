var express = require('express');
var router = express.Router();
var db = require("../data/userdb");

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.queryusers(function(err, rowCount, rows){
    if(err) return next(err);
      res.send(rows);
  })
});

router.put("/", function(req, res, next){
  db.createUsers(function(err, rowCount){
   if(err) return next(err);
   res.send(`Added ${rowCount}`);
  });
});

module.exports = router;
