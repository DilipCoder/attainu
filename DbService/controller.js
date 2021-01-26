import User from './model';

export const createAddress = async (req, res) => {
    try {
    const {area, city, mobile, state, pin, user} = req.body;
    const userUpdate = await User.findOneAndUpdate({username: user},{address:{$push:{area, city, mobile, state, pin}}}, {new: true, upsert: true});
    return res.status(200).json({ error: false, message:'address added', data: userUpdate});
    } catch (e) {
        return res.status(500).json({ error: true, message: e.message });
    }
}