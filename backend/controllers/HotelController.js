import Hotel from "../modals/HotelModal.js";
import User from "../modals/Usermodal.js";

export const registerHotel = async (req, res) => {
    try {
        
        const { name, address, contact, city } = req.body
        const owner= req.user._id

        const hotel = await Hotel.findOne({ owner })
        if (hotel) {
            return res.json({success:false,message:"Your hotel is already registered"})
        }

        await Hotel.create({ name, address, contact, city, owner })
        await User.findByIdAndUpdate()
        res.json({success:true , message:"Hotel registered Successfully"})


    } catch (error) {
        res.json({success:false,message:error.message})
    }
}



