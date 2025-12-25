import Booking from "../modals/BookingModal.js";
import Hotel from "../modals/HotelModal.js";
import Room from "../modals/RoomModal.js";

export const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
    try {

        const booking = await Booking.find({
            room,
            checkInDate: { $lte: checkOutDate },
            checkOutDate: { $gte: checkInDate }
        })
        const isAvailable = booking.length === 0
        return isAvailable

    } catch (error) {
        console.log(error.message)
    }
}


export const checkAvailabilityApi = async (req, res) => {
    try {

        const { room, checkInDate, checkOutDate } = req.body
        const isAvailable = await checkAvailability({ checkInDate, checkOutDate, room })
        res.json({ success: true, isAvailable })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


export const makeBooking = async (req, res) => {
    try {

        const { room, checkInDate, checkOutDate, guests } = req.body
        const user = req.user._id

        const isAvailable = await checkAvailability({
            checkInDate,
            checkOutDate,
            room
        })

        if (!isAvailable) {
            return res.json({ success: false, message: "Rooms is not available" })

        }

        const roomData = await Room.findById(room).populate("hotel")
        let totalPrice = roomData.pricePerNight
        console.log(roomData)

        const checkIn = new Date(checkInDate)
        const checkOut = new Date(checkOutDate)
        const timeDiff = checkOut.getTime() - checkIn.getTime()
        const nights = Math.ceil(timeDiff / (1000 * 3600 * 24))

        totalPrice *= nights
        const booking = await Booking.create({
            user,
            room,
            hotel: roomData.hotel._id,
            guests: +guests,
            checkInDate,
            checkOutDate,
            totalPrice,
        })
        res.json({ success: true, message: "Booking create Successfully" })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "failed create booking" })
    }
}

export const getUserBooking = async (req, res) => {
    try {

        const user = req.user._id
        const bookings = await Booking.find({ user }).populate("room hotel").sort({ createdAt: -1 })
        res.json({ success: true, bookings })


    } catch (error) {
        return res.json({ success: false, message: "failed to fetch booking" })
    }
}


export const getHotelBookings = async (req, res) => {
    try {
        const hotel = await Hotel.findOne({ owner: req.auth.userId })
        if (!hotel) {
            return res.json({ success: false, message: "No Hotel found" })
        }

        const bookings = await Booking.find({ hotel: hotel._id }).populate("room hotel user").sort({ createdAt: -1 })

        const totalBookings = bookings.length

        const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0)
        res.json({ sucess: true, dashboardData: { totalBookings, totalRevenue, bookings } })
    } catch (error) {
        return res.json({ success: false, message: "failed to fetch booking" })
    }
}




