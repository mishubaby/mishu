const express = require('express')
const path = require('path')
const studentMangerRouter =express.Router()

// 导入studentmangerController
const studentMangerCTRL= require(path.join(__dirname,"../controllers/studentmanagerController.js"))
studentMangerRouter.get('/list',studentMangerCTRL.getStudentListPage)
module.exports = studentMangerRouter