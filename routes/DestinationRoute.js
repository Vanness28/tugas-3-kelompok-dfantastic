import express from 'express';
import {
    getDestination,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination  
} from '../controller/Destination.js';

const router = express.Router();

router.get('/destination', getDestination);
router.get('/destination/:id', getDestinationById);
router.post('/destination', createDestination);
router.patch('/destination/:id', updateDestination);
router.delete('/destination/:id', deleteDestination);

export default router;