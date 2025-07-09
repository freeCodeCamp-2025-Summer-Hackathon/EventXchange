import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * @typedef User
 * @type {object}
 * @property {string} name
 * @property {string} username
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

/**
 * Creates a new user.
 * @param {string} name
 * @param {string} username
 * @param {string} password
 * @returns {Promise<User|null>}
 */
export async function createUser(name, username, password) {
  const user = await UserModel.findOne({ username }).lean().exec();
  if (user != null) {
    return null;
  }

  const passhash = await hashPassword(password);
  const newUser = new UserModel({ name, username, passhash });
  await newUser.save();

  return {
    id: newUser._id,
    name: newUser.name,
    username: newUser.username,
  };
}

export async function loginUser(username, password) {
  // TODO: Find the user by the username
  // TODO: Verify the provided password
  // TODO: Return the User
}

/**
 * Turns a password into a secure hash.
 * @param {string} password
 * @returns {Promise<string>}
 */
async function hashPassword(password) {
  return await bcrypt.hash(password, saltRounds);
}

/**
 * Checks a password against a hash.
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
async function checkPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
