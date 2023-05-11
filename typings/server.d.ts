/*
 * @Author: dushuai
 * @Date: 2023-05-11 14:22:00
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 16:04:53
 * @description: d.ts
 */

/** 环境变量类型定义 */
declare namespace ENV {
  /** env环境变量 读取路径 */
  interface Path {
    [key: string]: string
  }

  /** db配置 */
  interface DbConfig {
    [key: string]: Config
  }
  interface Config {
    MYSQL_HOST: string // 地址
    MYSQL_PROT: number // 端口
    MYSQL_USER: string // 连接数据库的账号
    MYSQL_PWD: string // 密码
    MYSQL_DB: string // 数据库名
    MYSQL_TYPE: string // 数据库dialect
  }
}
