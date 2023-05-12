/*
 * @Author: dushuai
 * @Date: 2023-05-12 15:02:25
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-12 16:04:12
 * @description: 异常说明
 */

interface Err {
  [key: string]: ERR.Data
}

/**
 * 异常说明
 */
const Err: Err = {
  publicHandleErr: { code: 500, msg: '操作失败' },
  publicParamErr: { code: 400, msg: '参数校验失败' },
}

module.exports = Err
