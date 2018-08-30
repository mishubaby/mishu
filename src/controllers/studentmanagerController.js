// const express = require('express')
const xtpl = require('xtpl')
const path = require('path')
const databasetool = require(path.join(__dirname,"../tools/databasetool.js"))

// Connection URL

// Database Name

// 最终处理,返回获取到的学生列表页面
// exports.getStudentListPage = (req, res) => {
//     const keyword = req.query.keyword || ''
//     // Use connect method to connect to the server
//     // {useNewUrlParser:true}:用来去除警告的
//     MongoClient.connect(url,{useNewUrlParser:true}, function (err, client) {
//         // console.log("Connected successfully to server");

//         // 拿到db对象
//         const db = client.db(dbName);
//         // Get the documents collection拿到列表里面的数据集合
//         const collection = db.collection('studentInfo');
//         // Find some documents查询
//         collection.find({name:{$regex:keyword}}).toArray(function (err, docs) {

//             client.close();
//             xtpl.renderFile(path.join(__dirname,"../statics/views/list.html"), {
//                 student:docs,
//                 keyword
//                 //keyword:keyword 对象中属性和值一样可以简写
//             }, function (error, content) {
//                 res.send(content)
//             });
//         });
//         // const studentManagerRouter = express.Router()

//         // // 导入studentManagerController
//         // const studentManagerCTRL = require(path.join(__dirname,"../controllers/studentmanagerController.js"))

//         // // 处理具体请求
//         // studentManagerRouter.get('/list',studentManagerCTRL.getStudentListPage)

//         // module.exports = studentManagerRouter
       
//     })
// }

// 通过连接数据库来操作
// 最终处理,返回获取到的学生列表页面
exports.getStudentListPage = (req, res) => {
    const keyword = req.query.keyword || ''
    databasetool.findList('studentInfo',{name:{$regex:keyword}},(err,docs)=>{
        xtpl.renderFile(path.join(__dirname,"../statics/views/list.html"),{
            student:docs,
const xtpl = require('xtpl')
const path = require('path')
const databasetool = require(path.join(__dirname,"../tools/databasetool.js"))
/**
 * 最终处理，返回获取到的学生列表页面
 */
exports.getStudentListPage = (req,res) => {
    const keyword = req.query.keyword || ''
    
    // 调用databasetool.findList 的方法，拿到数据，渲染列表页面，返回给浏览器
    databasetool.findList('studentInfo',{name:{$regex:keyword}},(err,docs)=>{
        xtpl.renderFile(path.join(__dirname,"../statics/views/list.html"),{
            students:docs,
            keyword
        },function(error,content){
            res.send(content)
        });
    })
    })    
}