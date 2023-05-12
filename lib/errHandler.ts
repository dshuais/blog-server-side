/*
 * @Author: dushuai
 * @Date: 2023-05-12 15:02:56
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-12 17:38:31
 * @description: 异常处理
 */
import { Context } from "koa";

/** 统一处理异常抛出 */
module.exports = (err: ERR.Data, ctx: Context) => {
  let status = 500
  switch (err.code) {
    case 400: case 401: case 404: case 500:
      status = 200
      break;
    default:
      status = 500
      break;
  }
  ctx.status = status
  ctx.body = err
}
