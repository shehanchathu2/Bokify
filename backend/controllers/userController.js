
//user data
export const getuserData = async (req, res) => {
    try {
        const role = req.user.role
        const recentSearchedCities = req.user.recentSearchedCities
        res.json({ success: true, role, recentSearchedCities })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//recent search citis

export const recentSearchCities = async (req,res) => {
    try {
        const { recentSearchedCities } = req.body
        const user = await req.user

        if (user.recentSearchedCities.length < 3) {
            user.recentSearchedCities.push(recentSearchedCities)
        } else {
            user.recentSearchedCities.shift()
            user.recentSearchedCities(recentSearchedCities)
        }
        await user.save()
        res.json({ success: true, message: "city added" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}








