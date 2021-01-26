import User from './model';

export const createAddress = async (req, res) => {
    try {
    const {username, area, city, mobile, state, pin} = req.body;
    const user = await User.findOne({ username });
    if(!user){
      const newUser = new User({ username, address: {area, city, mobile, state, pin} });
      return res.status(200).json({ error: false, message: 'new address created', data: await newUser.save() });
    }
    user.address.push({ area, city, mobile, state, pin });
    return res.status(200).json({ error: false, message: 'new address added', data: await user.save() });
    } catch (err) {
        return res.status(500).json({ error: true, message: e.message });
    }
}