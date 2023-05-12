/*
 * @Author: dushuai
 * @Date: 2023-05-10 11:01:44
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-12 15:54:47
 * @description: 处理hello模块接口方法
 */
import { Context } from "koa";


/** 处理hello模块接口方法 */
class HelloController {
  /** 添加 */
  async addHello(ctx: Context) {
    const { title } = ctx.request.body
    try {
      console.log(title);
      ctx.body = { code: 200, msg: '操作成功', data: title }
    } catch (error) {
      ctx.app.emit('error', ctx.errors.publicHandleErr, ctx)
    }
  }
}

export default new HelloController()
