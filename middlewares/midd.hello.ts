/*
 * @Author: dushuai
 * @Date: 2023-05-11 19:44:17
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-12 16:36:09
 * @description: hello 中间件
 */

import { Context, Next } from "koa"

/**
 * hello模块中间件
 */
export default {
  /** 添加字段验证 */
  async helloValidator(ctx: Context, next: Next) {
    const { title } = ctx.request.body
    if (!title) return ctx.app.emit('error', ctx.errors.publicParamErr, ctx)
    await next()
  },

  /** 查询字段校验 */
  async getHelloValid(ctx: Context, next: Next) {
    await next()
  }

}
