import express from 'express'

import { authUser } from '../middleware/AuthMiddleare.js'
import { registerHotel } from '../controllers/HotelController.js';

const hotelRouter = express.Router()

hotelRouter.post('/', authUser, registerHotel)

export default hotelRouter;









