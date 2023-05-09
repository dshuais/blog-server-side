
/*
 * @Author: dushuai
 * @Date: 2023-05-08 16:55:58
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-09 15:01:12
 * @description: 心平气和
 */
import { Context } from "koa"
const Router = require('koa-router')
const router = new Router() // ({ prefix: '/hello' })

/** 获取hello数据列表 */
router.get('/list/foreend', (ctx: Context) => {
  ctx.body = { code: 200, msg: '操作成功' }
})

module.exports = router
