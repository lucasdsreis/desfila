import express from 'express'
import clientController from '../controllers/clientController';

const router = express.Router()

router.post('/createClientAccount', clientController.createClientAccount)
router.post('/clientLogin', clientController.clientLogin)
router.post('/includeClientOnLine', clientController.includeClientOnLine)

export default router