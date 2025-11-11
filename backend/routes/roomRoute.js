import express from 'express'
import upload from '../middleware/UploadMiddleware'
import { authUser } from '../middleware/AuthMiddleare'
import { createRoom, getOwnerRoom, getRoom, togleRoomAvailabily } from '../controllers/RoomController.js'


const roomRouter = express.Router()

roomRouter.post('/',upload.array("image,4"),authUser,createRoom)
roomRouter.get('/', getRoom)
roomRouter.get('owner',authUser,getOwnerRoom)
roomRouter.post('toggle-availability',authUser,togleRoomAvailabily)


export default roomRouter









