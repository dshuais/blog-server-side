/*
 * @Author: dushuai
 * @Date: 2023-05-11 19:44:17
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 20:54:42
 * @description: hello 中间件
 */

import { Context, Next } from "koa"

/** 添加字段验证 */
export const helloValidator = async (ctx: Context, next: Next) => {
  console.log('ctx', ctx.request.body);
}
