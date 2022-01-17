//引入express
const express = require('express');

//创建app示例对象
const app = express();

//使用中间件解析urlencoded编码形式的请求体参数
app.use(express.urlencoded({extended: true}));

//使用中间件解析json编码形式的请求体参数
app.use(express.json());

//暴露静态资源
app.use(express.static(__dirname + '/src'));

//响应GET请求--可以接收query参数
app.get('/test_get', (request, response) => {
    console.log('有人请求test_get了--携带的query参数是：', request.query);
    response.send('hello_test_get');
});

//响应GET请求2--可以接收params参数
app.get('/test_get2/:name/:age', (request, response) => {
    console.log('有人请求test_get2了--携带的params参数是：', request.params);
    response.send('hello_test_get2');
});

//响应GET请求3
app.get('/get_person', (request, response) => {
    console.log('有人请求get_person了');
    const person = {name: 'tom', age: 19, sex: '男'};
    response.send(JSON.stringify(person));
});

//响应GET请求3
app.get('/get_person_delay', (request, response) => {
    console.log('有人请求get_person了');
    const person = {name: 'tom', age: 19, sex: '男'};
    setTimeout(() => {
        response.send(JSON.stringify(person));
    }, 3000)
});

//响应POST请求--可以接收请求体参数
app.post('/test_post', (request, response) => {
    console.log('有人请求test_post了--携带的请求体参数是：', request.body);
    response.send('hello_test_post');
});

//监听
app.listen(8080, (err) => {
    if (!err) {
        console.log('测试Ajax请求的服务器开启成功了!!');
        console.log('http://127.0.0.1:8080/2-xhr的5种状态.html');
        console.log('http://127.0.0.1:8080/3-ajax-get请求.html');
        console.log('http://127.0.0.1:8080/4-ajax-post请求.html');
        console.log('http://127.0.0.1:8080/5_ajax解析json数据.html');
        console.log('http://127.0.0.1:8080/6-ajax处理ie-get请求缓存问题.html');
        console.log('http://127.0.0.1:8080/7-ajax请求异常与超时处理.html');
        console.log('http://127.0.0.1:8080/8-ajax取消请求.html');
    }
});