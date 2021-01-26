import express from  'express';
import ImageRoutes from './routes';
import middleware from '../utils/middleware';
// use the inner utils if you want to isolate the module.
// import middleware from './utils/middleware';

let app = express();
middleware(app);

app.use("/image", [ImageRoutes]);

app.listen(3002, () => {
    console.log('Image Service is running on 3002');
})