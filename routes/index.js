var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  // console.log("req.body", req.body);
  res.render('index', { title: 'pi', state: "" });
});

router.post('/', function(req, res) {
    console.log("req.body.state:", req.body.state);
    res.send(200, {state: req.body.state});
    // res.send(200, "post route works", {state:req.body.state})

});

module.exports = router;