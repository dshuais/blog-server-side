/*
 * @Author: dushuai
 * @Date: 2023-05-08 16:50:04
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 19:33:42
 * @description: create models
 */
const fs = require('fs')

// node内fs模块的readdirSync方法可以拿到指定文件夹下的所有文件 再统一挂载
fs.readdirSync(__dirname).forEach((file: string) => {
  if (!['index.ts', 'index.create.ts'].includes(file)) {
    require('./' + file)
  }
})
