const express = require('express')
const path = require('path')
const studentMangerRouter =express.Router()

// 导入studentmangerController
const studentMangerCTRL= require(path.join(__dirname,"../controllers/studentmanagerController.js"))
// 获取学生列表页面
studentMangerRouter.get('/list',studentMangerCTRL.getStudentListPage)
// 获取学生新增页面
studentMangerRouter.get('/add',studentMangerCTRL.getAddStudentListPage)
// 完成新增操作
studentMangerRouter.post('/add',studentMangerCTRL.addstudent)
studentMangerRouter.get('/edit/:studentId',studentMangerCTRL.getEditStudent)
studentMangerRouter.post('/edit/:studentId',studentMangerCTRL.editStudent)
studentMangerRouter.get('/delete/:studentId',studentMangerCTRL.deleteStudent)
module.exports = studentMangerRouter