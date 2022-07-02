const config = require("../config/config");

const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;

    const response = {
        code: statusCode,
        message,
        ...(config.env === "development" && { stack: err.stack }),
    };

    if (config.env === "development") {
        console.error(err);
    }

    res.status(statusCode).send(response);
};

module.exports = {
    errorHandler,
};
