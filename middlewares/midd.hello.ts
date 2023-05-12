/*
 * @Author: dushuai
 * @Date: 2023-05-11 19:44:17
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-12 16:08:07
 * @description: hello 中间件
 */

import { Context, Next } from "koa"

/** 添加字段验证 */
export const helloValidator = async (ctx: Context, next: Next) => {
  const { title } = ctx.request.body
  if (!title) return ctx.app.emit('error', ctx.errors.publicParamErr, ctx)
  await next()
}
