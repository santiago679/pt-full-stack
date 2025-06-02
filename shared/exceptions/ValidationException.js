class ValidationException extends Error {
  constructor(errors = null) {
    super("One or more validation errors occurred.");
    this.name = "ValidationException";
    this.errors = errors;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationException);
    }
  }
}

module.exports = { ValidationException }
