import jwt from 'jsonwebtoken';


const JWT_KEY = "attainu";

export const signToken = (user, password) => jwt.sign({ user, password}, JWT_KEY, { expiresIn: '1h' });

export const checkAuth = async (req, res, next) => {
      try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const {user} = decoded;
    if(!user){
      return res.status(401).json({
        error: true,
        message: "Auth failed",
      });
    }
    next(user);
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: 'Auth failed',
    });
  }
}
