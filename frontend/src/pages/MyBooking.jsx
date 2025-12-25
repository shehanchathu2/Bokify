import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { MapPin, Users, Calendar, CheckCircle2, XCircle, CreditCard } from "lucide-react";
import { useAppContext } from "../context/appContext";
import toast from "react-hot-toast";

const MyBooking = () => {
  const { getToken,axios ,user} = useAppContext()
  const [booking, setBooking] = useState([])




  const getUserBooking = async () => {
    try {
      const { data } = await axios.get('/api/bookings/user',
        { headers: { Authorization: `Bearer ${await getToken()}` } })
      
      if (data.success) {
        setBooking(data.bookings)
        console.log(data)
      } else {
        console.log("error data fetching")
        toast.error("error data fetching")
      }
    } catch (error) {
      console.log("error data fetching")
      toast.error("error data fetching")
    }
  }

  useEffect(() => {
    getUserBooking()
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 py-28 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <Title
          text1="MY"
          text2="Bookings"
          subtitle="Review and manage your hotel stays — view your upcoming trips, check-in details, and complete your payments easily."
        />

        <div className="mt-10 space-y-8">
          {booking.map((b) => (
            <div
              key={b._id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Image Section */}
                <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden">
                  <img
                    src={b.room.images[0]}
                    alt={b.hotel.hotel}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Payment Status */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md bg-white/60 text-gray-800">
                    {b.isPaid ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-600" /> Paid
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-red-500" /> Unpaid
                      </>
                    )}
                  </div>
                </div>

                {/* Right Content Section */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  {/* Top - Hotel Details */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {b.hotel.hotel}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {b.hotel.city || "Sri Lanka"}
                    </p>

                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                      {b.room.roomType}
                    </span>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2.5 text-gray-600">
                        <MapPin className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{b.hotel.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-gray-600">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">
                          {b.guests} Guest{b.guests > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom - Booking Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                      {/* Dates */}
                      <div className="flex gap-8">
                        <div>
                          <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                            <Calendar className="w-4 h-4 text-blue-500" /> Check-In
                          </p>
                          <p className="text-base font-semibold text-gray-800">
                            {new Date(b.checkInDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>

                        <div>
                          <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                            <Calendar className="w-4 h-4 text-blue-500" /> Check-Out
                          </p>
                          <p className="text-base font-semibold text-gray-800">
                            {new Date(b.checkOutDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      {/* Price + Action */}
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                            Total Amount
                          </p>
                          <p className="text-3xl font-bold bg-teal-600 bg-clip-text text-transparent">
                            LKR {b.totalPrice}
                          </p>
                        </div>

                        {!b.isPaid && (
                          <button className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                            <CreditCard className="w-4 h-4" /> Pay Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
