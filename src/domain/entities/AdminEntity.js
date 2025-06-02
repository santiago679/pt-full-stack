class AdminEntity {
  constructor({ id, fullName, email, password }) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.gender = password;
  }
}

module.exports = { AdminEntity };