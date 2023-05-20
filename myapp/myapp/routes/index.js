var express = require('express');
var router = express.Router();
const oscontroller=require('../controllers/osController');

/* GET home page. */
 //os routes
 router.get("/os",oscontroller.os_requirement);
 router.get("/os/cpus",oscontroller.cpuList);
 router.get("/os/cpus/:id",oscontroller.cpubyid);
 //product routes
 router.get('/test', (req, res) => {
  res.status(200).send('This is a test route');
});


module.exports = router;
