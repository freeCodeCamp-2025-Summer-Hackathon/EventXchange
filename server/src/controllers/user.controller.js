import bcrypt from 'bcrypt';
import UserModel from '../models/User.js';

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
 * @property {string} joined
 */

const saltRounds = 10;

/**
 * Creates a new user.
 * @param {string} name
 * @param {string} username
 * @param {string} password
 * @returns {Promise<UserDTO>}
 */
export async function createUser(name, username, password) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    res.status(400).json({error: 'Must have a name.'});
    return;
  }
  if (typeof username !== 'string' || username.trim().length === 0) {
    res.status(400).json({error: 'Username is required'});
    return;
  }
  if (typeof password !== 'string' || password.trim().length === 0) {
    res.status(400).json({error: 'Password is required'});
    return;
  }

  const user = await UserModel.findOne({username}).lean().exec();
  if (user != null) {
    throw new Error(`A user with the username "${username}" already exists.`);
  }

  const passhash = await hashPassword(password);
  const newUser = new UserModel({name, username, passhash});
  await newUser.save();

  return makeUserDTO(newUser);
}

/**
 * Validates the provided credentials.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<UserDTO>}
 */
export async function loginUser(username, password) {
  const user = await UserModel.findOne({username}).lean().exec();
  if (user == null) {
    throw new Error(`Invalid credentials`);
  }

  const isAuthed = await checkPassword(password, user.passhash);
  if (!isAuthed) {
    throw new Error(`Invalid credentials`);
  }

  return makeUserDTO(user);
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

/**
 * Creates an object safe to send to the user.
 * @param {User} user
 * @returns {UserDTO}
 */
export function makeUserDTO(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    username: user.username,
    joined: user.createdAt,
  };
}
