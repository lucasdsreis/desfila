import express from 'express'
import restaurantRoute from './restaurantRoutes'
import clientRoute from './clientRoute'
const router = express.Router()


router.use('/restaurants', restaurantRoute)
router.use('/clients', clientRoute)
export default router