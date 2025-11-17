import Hotel from '../modals/HotelModal.js'
import { v2 as cloudinary } from 'cloudinary'
import Room from '../modals/RoomModal.js'
export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities } = req.body;
    console.log("form data:", req.body);
    console.log("files:", req.files);

    const hotel = await Hotel.findOne({ owner: req.auth.userId });
    if (!hotel) {
      return res.json({ success: false, message: "Hotel not found" });
    }

    // upload images to Cloudinary
    const uploadImage = req.files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path);
      return result.secure_url;
    });

    const images = await Promise.all(uploadImage);

    const room = await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: Number(pricePerNight),
      amenities: JSON.parse(amenities),
      images,
    });

    res.json({ success: true, message: "Room created successfully", room });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding rooms" });
  }
};


export const getRoom = async (req, res) => {
    try {
        
        const rooms = await Room.find({ isAvailable: true }).populate({
            path: 'hotel',
            populate: {
                path: 'owner',
                select:'image'
            }
        }).sort({ createAt: -1 })
        res.json({success:true,rooms})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const getOwnerRoom = async (req, res) => {
    try {
        
        const hotelData = await Hotel.findOne({ owner: req.auth.userId })
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






