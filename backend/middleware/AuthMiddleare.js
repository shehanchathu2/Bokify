import User from '../modals/Usermodal.js'

export const authUser = async (req,res,next) => {
    const { userId } = req.auth
    if (!userId) {
        res.json({success:false,message:"not authenticcate"})
    } else {
        const user = await User.findById(userId)
        req.user = user;
        next()
    }
}