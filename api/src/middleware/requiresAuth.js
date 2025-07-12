/**
 * Middleware to protect against unuathorized users.
 * @param {Reques} req
 * @param {Response} res
 * @param {() => void} next
 */
export function requiresAuth(req, res, next) {
  if (!userAuthed(req.session)) {
    res.status(403).json({error: 'Not authorized'});
    return;
  }
  next();
}

/**
 * Checks session data for an authorized user.
 * @param {object} sessionData
 * @returns {boolean}
 */
function userAuthed(sessionData) {
  if (sessionData == null || typeof sessionData.name !== 'string') {
    return false;
  }
  return true;
}
