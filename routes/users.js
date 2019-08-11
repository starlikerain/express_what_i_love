var express = require('express');
var router = express.Router();
const userServices = require('../services/userServices');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/insertUser', function (req, res, next) {
    res.locals.user = userServices.insertUser(req.query.firstName, req.query.lastName, req.query.age);
    // render the error page
    res.status(200);
    res.render('user');
});

router.get('/listUser', function (req, res, next) {
    (async () => {
        res.locals.users = await userServices.listUsers(); // 返回一个 User.users Array
        res.status(200);
        res.render('users');
    })()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
});


module.exports = router;
