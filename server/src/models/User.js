import {model, Schema} from 'mongoose';

/**
 * @typedef User
 * @type {object}
 * @property {string} _id
 * @property {string} name
 * @property {string} username
 * @property {string} passhash
 */

/**
 * @typedef UserDTO
 * @type {Only<User, 'name' | 'username>'}
 * @property {string} id
 */

const saltRounds = 10;

const userSchema = new Schema({
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
});

const UserModel = model('User', userSchema);

export default UserModel;

