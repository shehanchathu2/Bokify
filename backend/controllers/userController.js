
//user data
export const getuserData = async (req,res) => {
    try {
        
        const role = req.user.role
        const recentSearchedCities = req.user
        res.json({success:true.role,recentSearchedCities})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

//recent search citis

export const recentSearchCities = async ()=> {
    try {
        const { recentSearchCities } = req.body
        const user = await req.user

        if (user.recentSearchCities.length < 3) {
            user.recentSearchCities.push(recentSearchCities)
        } else {
            user.recentSearchCities.shift()
            user.recentSearchCities(recentSearchCities)
        }
        await user.save()
        res.json({success:true,message:"city added"})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}








