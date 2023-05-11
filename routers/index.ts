/*
 * @Author: dushuai
 * @Date: 2023-05-08 16:50:04
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 20:11:35
 * @description: routes
 */
const fs = require('fs')
import { Context } from "koa"
const Router = require('koa-router')
// const user = require('./user')
const router = new Router({ prefix: '/api' })

router.get('/', async (ctx: Context) => {
  ctx.render('index')
})

// 所有module router统一挂载处理
// router.use('/user', user.routes(), user.allowedMethods()) // 用户相关路由
// ....

// node内fs模块的readdirSync方法可以拿到指定文件夹下的所有文件 再统一挂载
fs.readdirSync(__dirname).forEach((file: string) => {
  if (!['index.ts'].includes(file)) {
    let r = require('./' + file)
    router.use(`/${file.split('.')[1]}`, r.routes(), r.allowedMethods())
  }
})

module.exports = router
