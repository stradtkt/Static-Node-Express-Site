const throwPageNotFoundError = (req, res) => {
    const ERROR = new Error('The requested page does not exist.');
    ERROR.code = 404;
    res.status(404);
    return ERROR;
};

module.exports.throwPageNotFoundError = throwPageNotFoundError;
