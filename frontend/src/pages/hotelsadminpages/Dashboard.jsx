import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/appContext'
import toast from 'react-hot-toast'

import {
    ShoppingBag,
    Package,
    DollarSign,
    Users,
    TrendingUp,
    TrendingDown,
    ShoppingCart,
    Clock,
    CheckCircle,
    XCircle
} from 'lucide-react';

const Dashboard = () => {

    const { axios, currency, getToken, user} = useAppContext()

    const [dashBoardData, setDashboardData] = useState({
        bookings: [],
        totalBookings: 0,
        totalRevenue:0,
    })

    const getDashBoardData = async () => {
        try {
            const { data } = await axios.get('/api/bookings/hotel',
                { headers: { Authorization: `Bearer ${await getToken()}` } })

            if (data.sucess) {
                setDashboardData(data.dashboardData)
                console.log(data)
            } else {
                toast.error("error")
            }
        } catch (error) {
            console.log(error)
            toast.error("error fetching data")
        }
    }

    useEffect(() => {
        if (user) {
            getDashBoardData()
        }
    },[user])

   



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 sm:p-10">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                            Dashboard Overview
                        </h1>
                    </div>
                    <p className="text-slate-600 ml-5">Welcome back! Here's what's happening with your store today.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                </div>


                


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Recent Orders */}
                   


                  
                       
                </div>


                <div className="relative group">
                    
                </div>

            </div>
        </div>
    );
};

export default Dashboard;