import {signToken} from "../utils";

export const login = (req, res) => {
    try {
    const {username, password} = req.body;
    if(!username || username.trim().length < 1) {
        return res.status(500).json({ error: true, message: 'enter username' });
    }
    if(!password || password.trim().length < 1) {
        return res.status(500).json({ error: true, message: 'enter password' });
    }
    return res.status(200).json({ error: false, message: 'user logged in', data: signToken(username, password) });
    } catch (err) {
        return res.status(500).json({ error: true, message: e.message });
    }
    
}