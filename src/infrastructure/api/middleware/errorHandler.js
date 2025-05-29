function errorHandler(err, req, res, next) {
  
  console.error(err);

  const statusCode = err.status || 500;

  const message = err.message || 'Error interno del servidor';

  res.status(statusCode).json({
    error: true,
    message: message
  });
}

module.exports = errorHandler;
