import User from "../models/User.js";

// Update user CartData
export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const userId = req.userId;
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
