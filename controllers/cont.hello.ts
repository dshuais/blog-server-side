/*
 * @Author: dushuai
 * @Date: 2023-05-10 11:01:44
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-15 10:31:09
 * @description: 处理hello模块接口方法
 */
import { Context } from "koa";
const { Op } = require('sequelize')
const Hello = require('../models/m.hello')

/** 处理hello模块接口方法 */
class HelloController {
  /** 添加 */
  async addHello(ctx: Context) {
    const { title } = ctx.request.body
    try {
      console.log(title);
      // Hello.create是sequelize的快捷INSERT方法
      const res = await Hello.create({ title })
      if (res) {
        /**
         * 返回的数据格式 对象内第一条为dataValues的对象 当前插入的用户数据
         * 其他的数据不考虑
        */
        ctx.body = { code: 200, msg: '操作成功', data: res.dataValues }
      } else {
        ctx.app.emit('error', ctx.errors.publicHandleErr, ctx)
      }
    } catch (error) {
      ctx.app.emit('error', ctx.errors.publicHandleErr, ctx)
    }
  }

  /** 查询所有数据 */
  async getHelloList(ctx: Context) {
    const { title } = ctx.query
    try {
      const data = await Hello.findAndCountAll({
        attributes: ['random', 'title', 'create_time', 'update_time'], // 特定的属性 传入数组 内的对象为最后查询后返回的字段
        where: {
          status: 1,
          title: {
            [Op.substring]: title || title === '0' ? title : ''
          }
        }
      })
      ctx.body = { code: 200, msg: '操作成功', data }
    } catch (error) {
      ctx.app.emit('error', ctx.errors.publicHandleErr, ctx)
    }
  }
}

export default new HelloController()
