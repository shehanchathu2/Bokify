import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser, useAuth } from '@clerk/clerk-react'
import {toast} from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BACKENT_URL

const AppContext = createContext()

export const AppProvider = ({ children }) => {
 
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const { user } = useUser()
    const {getToken} = useAuth()

    const [isOwner, setIsOwner] = useState(false)
    const [showHotelReg, setShowHotelReg] = useState(false) 
    const [searchedCities, setSearchCities] = useState([])
    const [rooms,setRooms] = useState([])
    

    const fetchRoom = async () => {
        try {
            const { data } = await axios.get('/api/rooms')
            console.log(data)
            if (data.success) {
                setRooms(data.rooms)
            } else {
                toast.error("jbjweln")

            }
        } catch (error) {
            toast.error(error.message)
        }
    }



    const fetchUser = async () => {
        try {
           const {data} =  await axios.get('/api/user', {
                headers: {
                    Authorization: `Bearer ${await
                getToken()
                       }`
               }
           })
            console.log(data)
            if (data.success) {
                setIsOwner(data.role === "hotelOwner")
                setSearchCities(data.recentSearchedCities)
            } else {
                setTimeout(() => { 
                    fetchUser()
                },5000)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (user) {
            fetchUser()
        }
    }, [user])
    
    useEffect(() => {
        fetchRoom()
    },[])

    const value = {
        currency, navigate, user, getToken, isOwner, setIsOwner, axios,
        showHotelReg, setShowHotelReg, searchedCities, setSearchCities,
        rooms,setRooms
    }

    return (
        <AppContext.Provider value={value }>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=> useContext(AppContext)



