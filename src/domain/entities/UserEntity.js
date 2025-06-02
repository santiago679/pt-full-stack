class UserEntity {
  constructor({ id, dni, fullName, age, phone, email, gender }) {
    this.id = id;
    this.dni = dni;
    this.fullName = fullName;
    this.age = age;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
  }
}

module.exports = { UserEntity };