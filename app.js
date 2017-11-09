const express = require('express');
const app = express();

//路由配置
const index = require('./routes/index');
app.use('/index', index);

// 静态资源配置
app.use(express.static('web'));

//根目录重定向
app.get('/', function (req, res) {
    res.redirect('/view/index.html');//重定向
});

// 错误处理
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//启动服务器
const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});