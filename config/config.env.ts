/*
 * @Author: dushuai
 * @Date: 2023-05-09 12:07:36
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-09 12:20:16
 * @description: 环境配置
 */
const dotenv = require('dotenv')

interface Path {
  [key: string]: string
}
const pathList: Path = {
  'dev': '.env.development',
  'start:test': '.env.test',
  'start': '.env.production',
}

dotenv.config({ path: pathList[process.env.npm_lifecycle_event as string] })

module.exports = process.env
