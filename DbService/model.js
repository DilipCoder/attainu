/* eslint-disable no-console */
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    username: {
      type: String,
      index: 'user',
      unique: true,
      required: true,
    },
    addresses: [{
        area: String,
        city: String,
        state: String,
        mobile: Number,
        pin: Number,
    }]
  }, { timestamps: true }
);


// model initialize 
const User = mongoose.model('User', UserSchema);

export default User;
