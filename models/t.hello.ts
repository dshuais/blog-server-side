/*
 * @Author: dushuai
 * @Date: 2023-05-11 16:40:03
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-12 16:44:43
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
    primaryKey: true, // 主键
    defaultValue: DataTypes.UUIDV4, // 默认值
    comment: 'random,主键，唯一'
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'hello文案'
  },
  status: {
    type: DataTypes.BOOLEAN, // TINYINT(1)
    allowNull: false,
    defaultValue: 0,
    comment: '状态0不展示1展示'
  }
}, {
  tableName: 't_hello', // 这个属性设置 创建的表不会自动加s 按照用户写的名字来创建
  timestamps: true, // 创建表时自动添加createdAt和updatedAt 可以通过这个来禁用(创建和更新时间)
  // 想要 updatedAt 但是希望名称叫做 update_time
  updatedAt: 'update_time',
  createdAt: 'create_time',
  // 不想要 createdAt
  // createdAt: false,
})

/**
 * 同步数据库
 * x.model.ts文件创建或修改后 选用一种方式创建表
 * 表创建完成后 可注释掉同步命令
*/
// HelloModel.sync() // 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
// HelloModel.sync({ force: true }) // 将创建表,如果表已经存在,则将其首先删除
// HelloModel.sync({ alter: true }) // 这将检查数据库中表的当前状态(字段和数据类型),然后在表中进行必要的更改以使其与模型匹配

module.exports = HelloModel
