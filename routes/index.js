const express = require('express');
const router = express.Router();


// 全局请求中间件，第一个参数可以为空，可以指定链接定义中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    console.log('URL:', `[${req.method}]${req.originalUrl}`);
    // console.log('Request Type:', req.method);
    next();
});

//数据获取
router.get('/getData', function (req, res) {
    res.send('123');
});

module.exports = router;
