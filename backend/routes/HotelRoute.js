import express from 'express'
import { authUser } from '../middleware/AuthMiddleare'
import { registerHotel } from '../controllers/HotelController'

const hotelRouter = express.Router()

hotelRouter.post('/', authUser, registerHotel)

export default hotelRouter;









