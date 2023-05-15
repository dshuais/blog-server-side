
/*
 * @Author: dushuai
 * @Date: 2023-05-08 16:55:58
 * @LastEditors: dushuai
 * @LastEditTime: 2023-05-15 10:45:21
 * @description: 心平气和
 */
const router = require('koa-router')()
import midd from '../middlewares/midd.hello'
import hello from '../controllers/cont.hello'

/** 添加hello数据 */
router.post('/add/foreend', midd.helloValidator, hello.addHello)

/** 修改数据 */
router.post('/edit/foreend')

/** 获取hello数据列表 */
router.get('/list/foreend', midd.getHelloValid, hello.getHelloList)

module.exports = router
