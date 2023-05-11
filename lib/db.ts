/*
 * @Author: dushuai
 * @Date: 2023-05-10 11:31:53
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 16:09:51
 * @description: 数据库配置
 */

const env: string = process.env.npm_lifecycle_event as string
const pathlist: ENV.DbConfig = {
  'dev': {
    MYSQL_HOST: '1.116.142.168',
    MYSQL_PROT: 7788,
    MYSQL_USER: 'ids-blog',
    MYSQL_PWD: 'W56Dn55TENYm5ART',
    MYSQL_DB: 'ids-blog',
    MYSQL_TYPE: 'mysql'
  },
  'start:test': {
    MYSQL_HOST: '1.116.142.168',
    MYSQL_PROT: 7788,
    MYSQL_USER: 'angeldushuai',
    MYSQL_PWD: 'admin123',
    MYSQL_DB: 'angellone',
    MYSQL_TYPE: 'mysql'
  },
  'start': {
    MYSQL_HOST: '1.116.142.168',
    MYSQL_PROT: 7788,
    MYSQL_USER: 'angeldushuai',
    MYSQL_PWD: 'admin123',
    MYSQL_DB: 'angellone',
    MYSQL_TYPE: 'mysql'
  }
}

module.exports = pathlist[env]
