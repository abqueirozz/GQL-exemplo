import cors from 'cors'
import {Router} from 'express'
const router = Router()

router.options('*', cors())

router.use('*', (req, res, next) => {
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

export default router
