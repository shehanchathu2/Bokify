import express from 'express'
import { authUser } from '../middleware/AuthMiddleare.js'
import { getuserData, recentSearchCities } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.get('/', authUser, getuserData)
userRoute.post('/store-recent-cities', authUser,recentSearchCities)

export {userRoute}