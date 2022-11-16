import express from 'express';
import {
    getDetail,
    getDetailById,
    createDetail,
    updateDetail,
    deleteDetail    
} from '../controller/DetailRestaurant.js';

const router = express.Router();

router.get('/detail_restaurant', getDetail);
router.get('/detail_restaurant/:id', getDetailById);
router.post('/detail_restaurant', createDetail);
router.patch('/detail_restaurant/:id', updateDetail);
router.delete('/detail_restaurant/:id', deleteDetail);

export default router;