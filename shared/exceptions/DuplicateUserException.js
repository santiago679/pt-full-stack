class DuplicateUserException extends Error {
  constructor() {
    super('There is already a registered user with that DNI.');
    this.name = 'DuplicateUserException';
    this.statusCode = 409;
  }
}

module.exports = { DuplicateUserException }