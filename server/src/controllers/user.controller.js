import UserModel from "../models/User.js";
import bcrypt from 'bcrypt';


/**
 * Creates a new user.
 * @param {string} name
 * @param {string} username
 * @param {string} password
 * @returns {Promise<UserDTO>}
 */
export async function createUser(name, username, password) {
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
function makeUserDTO(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    username: user.username,
  };
}
