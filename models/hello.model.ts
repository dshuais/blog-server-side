/*
 * @Author: dushuai
 * @Date: 2023-05-11 16:40:03
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-11 18:09:57
 * @description: hello表
 */
const { DataTypes } = require('sequelize')
const sequelize = require('./index')

// define内的第一个参数为自动创建的表名 自动加s 现在为t_hello 会自动创建t_hellos的表
/**
 * t_hello
 */
const HelloModel = sequelize.define('t_hello', {
  // 在这里定义模型属性 就是表内的字段 不用写id 会自动维护id
  random: {
    type: DataTypes.UUID,
    allowNull: false, // 是否可为空
    unique: true, // 是否唯一
    defaultValue: DataTypes.UUIDV4, // 默认值
    comment: 'random,主键，唯一'
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    commit: 'hello文案'
  },

}, {
  tableName: 't_hello', // 这个属性设置 创建的表不会自动加s 按照用户写的名字来创建
  timestamps: true // 创建表时自动添加createAt和updateAt 可以通过这个来禁用(创建和更新时间)
})


