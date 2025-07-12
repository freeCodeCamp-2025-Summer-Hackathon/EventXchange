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
  if (
    sessionData?.user == null ||
    typeof sessionData.user.id !== 'string' ||
    typeof sessionData.user.name !== 'string' ||
    typeof sessionData.user.username !== 'string'
  ) {
    return false;
  }
  return true;
}
