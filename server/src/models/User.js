import {model, Schema} from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      immutable: true,
    },
    passhash: {
      type: String,
      required: true,
      immutable: true,
    },
  },
  {timestamps: true},
);

const UserModel = model('User', userSchema);

export default UserModel;
