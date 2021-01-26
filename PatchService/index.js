import express from  'express';
import JSONRoutes from './routes';
import middleware from '../utils/middleware';
// use the inner utils if you want to isolate the module.
// import middleware from './utils/middleware';

let app = express();
middleware(app);

app.use("/json", [JSONRoutes]);

app.listen(3003, () => {
    console.log('Patch Service is running on 3003');
})