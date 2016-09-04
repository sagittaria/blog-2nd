var router = require('express').Router();

router.route('/register')
    .get(function (req, res) {
        res.render('account/register', {title: '注册'});
    })
    .post(function (req, res, next) {
        var username = req.body.username,
            password = req.body.password;

        console.log('Register post received!');
        console.log('username:', username, 'password:', password);
        res.setHeader('content-type','text/html; charset=UTF-8');
        res.end('成功收到POST请求');
    });

module.exports = router;
