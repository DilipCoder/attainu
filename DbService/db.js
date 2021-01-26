
/* eslint-disable no-console */
import mongoose from 'mongoose';
import { MongoMemoryReplSet } from 'mongodb-memory-server';
let {
  NODE_ENV,
  MONGO_DB,
  MONGO_PORT,
  MONGO_HOSTNAME,
  DB_USER,
  DB_PASS,
  DB_NAME
} = process.env;

// can be fixed after dot-env implementations
DB_USER = 'attainu';
DB_PASS = 'attainu';
DB_NAME = 'attainu';

let DB_URI = '';
if(NODE_ENV === 'development'){
  DB_URI = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
} else {
  DB_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@meetupme-5nald.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
}
let mongoServer = null;
const createConnect = async () => {
  mongoose.Promise = global.Promise;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // retryWrites: false,
  };
  
    try {
      if (NODE_ENV === 'test') {
      mongoServer = new MongoMemoryReplSet({ replSet: { storageEngine: 'wiredTiger' } });
      await mongoServer.waitUntilRunning();
      const mongoUri = await mongoServer.getUri();
      await mongoose.connect(mongoUri, options);
      } else {
        mongoose.connect(DB_URI, options);
      }
    } catch (err) {
      console.log('err', err);
    }
  mongoose.connection
    .once('open', () => console.log('MongoDb running'))
    .on('error', err => console.log(err));
  mongoose.set('debug', true);
};
const close = async () => { await mongoose.disconnect(); if (process.env.NODE_ENV === 'test') await mongoServer.stop(); };
module.exports = { createConnect, close };