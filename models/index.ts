/*
 * @Author: dushuai
 * @Date: 2023-05-10 11:01:15
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 19:34:21
 * @description: sequelize配置
 */
const { Sequelize } = require('sequelize')
const { MYSQL_HOST, MYSQL_PROT, MYSQL_USER, MYSQL_PWD, MYSQL_DB, MYSQL_TYPE } = require('../lib/db')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  port: MYSQL_PROT,
  dialect: MYSQL_TYPE,
  timezone: '+08:00' // 设置时间为北京东八区时间 在数据库自动维护的创建和更新时间内使用
})

/**
 * 测试是否连接成功
 * 看到打印后表示连接成功 成功后可注释
 */
// seq.authenticate()
//   .then(() => {
//     console.log('数据库连接成功');
//   })
//   .catch((err: any) => {
//     console.log('数据库连接失败', err);
//   })

module.exports = seq
