//1、导入express
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

//2、创建应用
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Use the session middleware
app.use(session({ secret: 'keyboard cat', resave: true,saveUninitialized:false,cookie: { maxAge: 600000 }}))
// resave:强制session保存到session store中。即使在请求中这个session没有被修改。
// saveUninitialized:强制没有“初始化”的session保存到storage中，没有初始化的session指的是：刚被创建没有被修改,如果是要实现登陆的session那么最好设置为false(reducing server storage usage, or complying with laws that require permission before setting a cookie) 而且设置为false还有一个好处，当客户端没有session的情况下并行发送多个请求时。默认是true,但是不建议使用默认值。
app.use(session({ secret: 'keyboard cat',resave: true,saveUninitialized:false, cookie: { maxAge: 600000 }}))

//3、集成路由
const accountRouter = require(path.join(__dirname,"./routers/accountRouter.js"))
const studentManagerRouter = require(path.join(__dirname,"./routers/studentmanagerRouter.js"))
app.use('/account',accountRouter)
app.use('/studentmanager',studentManagerRouter)

//4、开启Web服务
app.listen(3000,err=>{
    if(err){
        console.log(err)
    }

    console.log("start OK")
})