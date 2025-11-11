import express from 'express'
import "dotenv/config"
import cors from "cors"
import connectDB from './config/mogodb.js'
import {  clerkMiddleware } from '@clerk/express'
import clerkWbohooks from './controllers/clerkWebhooks.js'
import { userRoute } from './routes/UserRoutes.js'
import hotelRouter from './routes/HotelRoute.js'
import connectCloudinary from './config/cloudinary.js'
import roomRouter from './routes/roomRoute.js'
import bookingRouter from './routes/BookingRoute.js'



connectDB()
connectCloudinary()

const app = express()
app.use(cors())

//middleware
app.use(express.json())
app.use(clerkMiddleware())

// API
app.use('/api/clerk', clerkWbohooks)


app.get('/', (req, res) => res.send('API working'))
app.use('/api/user', userRoute)
app.use('/api/hotels', hotelRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server runing on port ${PORT}`))




