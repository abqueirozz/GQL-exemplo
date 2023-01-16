import { Router } from 'express'
import { createHandler } from 'graphql-http/lib/use/express'
import { schema } from '../graphql/schema.js'

const router = Router()

router.use('/graphql', createHandler({ schema }))

export default router
