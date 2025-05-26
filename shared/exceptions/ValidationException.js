class ValidationException extends Error {
  constructor(errors) {
    super("One or more validation errors occurred.");
    this.name = "ValidationException";
    this.errors = errors;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationException);
    }
  }

  constructor() {
    super("One or more validation errors occurred.");
    this.name = "ValidationException";
  }
}

module.exports = { ValidationException }