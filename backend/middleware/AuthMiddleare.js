import User from '../modals/Usermodal.js'  

export const authUser = async (req, res, next) => {
  try {
    const { userId } = req.auth(); 

    if (!userId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user;
    next(); // ✅ move to the next middleware/controller
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
