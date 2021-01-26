import express from  'express';
import DBRoutes from './routes';
import middleware from '../utils/middleware';
import {createConnect} from './db';
// use the inner utils if you want to isolate the module.
// import middleware from './utils/middleware';

let app = express();
createConnect();
middleware(app);

app.use("/db", [DBRoutes]);

app.listen(3001, () => {
    console.log('DB Service is running on 3001');
})