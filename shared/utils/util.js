const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function hashPassword(pass) {
    return await bcrypt.hash(pass, 10)
} 

async function comparePassword(plain, hashed) {
    return await bcrypt.compare(plain, hashed)
}

function generateToken(user) {
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token
}

function validateToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
}

module.exports = { hashPassword, comparePassword, generateToken, validateToken }