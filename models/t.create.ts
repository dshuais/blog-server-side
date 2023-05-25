/*
 * @Author: dushuai
 * @Date: 2023-05-08 16:50:04
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-25 10:55:01
 * @description: create models
 */
const fs = require('fs')

// node内fs模块的readdirSync方法可以拿到指定文件夹下的所有文件 再统一挂载
fs.readdirSync(__dirname).forEach((file: string) => {
  if (!['index.ts', 't.create.ts'].includes(file)) {
    require('./' + file)
  }
})
