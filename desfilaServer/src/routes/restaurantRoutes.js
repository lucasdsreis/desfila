import express from 'express'
import restaurantController from '../controllers/restaurantController';

const router = express.Router()

router.post('/createRestaurantAccount', restaurantController.createRestaurantAccount)
router.post('/restaurantLogin', restaurantController.restaurantLogin)
router.get('/getRestaurants', restaurantController.getRestaurants)
router.post('/selectRestaurant', restaurantController.selectRestaurant)
router.post('/searchRestaurant', restaurantController.searchRestaurant)
export default router