const bcrypt = require('bcryptjs')

async function hashPassword(pass) {
    return await bcrypt.hash(pass, 10)
} 

async function comparePassword(plain, hashed) {
    return await bcrypt.compare(plain, hashed)
}

module.exports = { hashPassword, comparePassword }