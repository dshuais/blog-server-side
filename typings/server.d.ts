/*
 * @Author: dushuai
 * @Date: 2023-05-11 14:22:00
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 14:28:30
 * @description: d.ts
 */

/** 环境变量类型定义 */
declare namespace ENV {
  interface Path {
    [key: string]: string
  }
}
