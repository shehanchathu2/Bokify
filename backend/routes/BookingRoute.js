import express from 'express'
import { checkAvailability, checkAvailabilityApi, getHotelBookings, getUserBooking, makeBooking } from '../controllers/BookingController.js'
import { authUser } from '../middleware/AuthMiddleare.js'

const bookingRouter= express.Router()



bookingRouter.post('/check-availability',checkAvailabilityApi)
bookingRouter.post('/book', authUser, makeBooking)
bookingRouter.post('/user', authUser, getUserBooking)
bookingRouter.post('/hotel', authUser, getHotelBookings)

export default bookingRouter









