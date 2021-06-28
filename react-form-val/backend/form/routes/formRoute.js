import express from 'express'
import { formAdd, formGet } from '../controllers/formController'

const router = express.Router()

router.post('/add',formAdd)
router.get('/get',formGet)

module.exports = router