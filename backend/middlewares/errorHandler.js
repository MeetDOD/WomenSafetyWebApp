const { constants } = require('../constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation error", message: err.message, stackTrace: err.stack });
            break;

        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break;

        case constants.UNAUTHORIZED:
            res.json({ title: "unauthorized error", message: err.message, stackTrace: err.stack });
            break;

        case constants.FORBIDDEN:
            res.json({ title: "forbidden error", message: err.message, stackTrace: err.stack });
            break;

        case constants.SERVER:
            res.json({ title: "server error", message: err.message, stackTrace: err.stack });
            break;

        default:
            res.json({ title: "server error", message: err.message, stackTrace: err.stack });
            break;
    }

}

module.exports = errorHandler;