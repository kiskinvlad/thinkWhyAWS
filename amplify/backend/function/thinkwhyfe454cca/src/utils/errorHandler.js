function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(err.statusCode).json(createErrorResponse(err));
  } else {
    next(err);
  }
}

function createErrorResponse(err) {
  switch (err.statusCode) {
    case 404:
      return {
        statusCode: err.statusCode,
        recourse: err.url,
        message: `Resource ${err.url} not found`,
        coreError: err
      };
    default:
      return {
      statusCode: 500,
      message: `Internal server error`,
      coreError: err
    }
  }
}

module.exports = clientErrorHandler;
