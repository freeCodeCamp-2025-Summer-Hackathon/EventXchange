// import bcrypt from 'bcrypt'
// import User from '../models/user.js'

// export async function login(req, res) {
//     const { username, password } = req.body
//     const user = await User.findOne({ username })
//     if (!user) return res.status(401).json({ error: 'Invalid credentials' })

//     const valid = await bcrypt.compare(password, user.passhash)
//     if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

//     req.session.userId = user._id
//     res.json({ message: 'Logged in' })
// }

// export function checkSession(req, res) {
//     if (req.session.userId) {
//         res.json({ loggedIn: true, userId: req.session.userId })
//     } else {
//         res.json({ loggedIn: false })
//     }
// }

// export function logout(req, res) {
//     req.session.destroy(err => {
//         if (err) return res.status(500).json({ error: 'Logout failed' })
//         res.json({ message: 'Logged out' })
//     })
// }

export function login(req, res) {
    const { username, password } = req.body;
    if (username === 'testuser' && password === '123456') {
      req.session.user = { username };
      return res.json({ success: true, message: 'Login success' });
    }
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  
  export function checkSession(req, res) {
    if (req.session.user) {
      res.json({ loggedIn: true, user: req.session.user });
    } else {
      res.json({ loggedIn: false });
    }
  }
  
  export function logout(req, res) {
    req.session.destroy(() => {
      res.json({ message: 'Logged out' });
    });
  }
  