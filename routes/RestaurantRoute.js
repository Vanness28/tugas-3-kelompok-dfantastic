import express from 'express';
import {
    getRestaurant,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant    
} from '../controller/Restaurant.js';

const router = express.Router();

router.get('/restaurant', getRestaurant);
router.get('/restaurant/:id', getRestaurantById);
router.post('/restaurant', createRestaurant);
router.patch('/restaurant/:id', updateRestaurant);
router.delete('/restaurant/:id', deleteRestaurant);

export default router;