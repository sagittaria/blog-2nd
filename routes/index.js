var express = require('express');
var router = express.Router();

var user = {
    id: 1,
    username: 'alice',
    title: 'alice 的博客',
    description: 'Alice是个好人`',
    avatar: '/images/default-avatar.jpg'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index',{
    users: [user, user, user],
    title: 'TMY BLOG: 一个简单的博客系统'
  });
});

module.exports = router;
