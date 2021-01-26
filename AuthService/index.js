import express from  'express';
import AuthRoutes from './routes';
import middleware from '../utils/middleware';
// use the inner utils if you want to isolate the module.
// import middleware from './utils/middleware';


let app = express();
middleware(app);

app.use("/auth", [AuthRoutes]);

app.listen(3000, () => {
    console.log('Auth Server is running on 3000');
})