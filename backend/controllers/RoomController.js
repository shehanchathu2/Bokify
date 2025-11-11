import Hotel from '../modals/HotelModal.js'
import { v2 as cloudinary } from 'cloudinary'
import Room from '../modals/RoomModal.js'
export const createRoom = async () => {
    try {
        
        const { roomType, pricePerNight, amenities } = req.body 
        const hotel = await Hotel.findOne({ owner: req.auth.userId })
        
        if (!hotel) {
            return res.json({success:false,message:"Hotel not founded"})
        }

        //upload image
        const uploadImage = req.files.map(async (file) => {
            const res = await cloudinary.uploader.upload(file.path)
            return res.secure_url;
        })

        const images = await Promice.all(uploadImage)

        await Room.create({
            hotel: hotel._id,
            roomType,
            pricePerNight: pricePerNight,
            amenities: JSON.parse(amenities),
            images
        })
        res.json({success:true,message:"Room create successfully"})

    } catch (error) {
        res.json({success:false,message:message.error})
    }
}

export const getRoom = async (req, res) => {
    try {
        
        const rooms = await Room.find({ isAvailable: true }).populate({
            path: 'hotel',
            populate: {
                path: 'owner',
                select:'image'
            }
        }).sort({ createAt: -1 })
        res.json({success:false,rooms})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const getOwnerRoom = async (req, res) => {
    try {
        
        const hotelData = await Hotel({ owner: req.auth.userId })
        const rooms= await Room.find({hotel:hotelData._id.toString()}).populate("hotel")
        res.json({success:true,rooms})

    } catch (error) {
         res.json({success:false,message:error.message})
    }
}

export const togleRoomAvailabily = async (req, res) => {
    try {
        
        const { roomId } = req.body
        const roomData = await Room.findById(roomId)
        roomData.isAvailable = !roomData.isAvailable
        await roomData.save()
        res.json({success:true,message:"Room availability updated"})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}






