export const errorHandler = (err, req, res, next) => {
    switch (true) {
        case typeof err === 'string':
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.statusCode(statusCode).json({ message: err });
        default:
            return res.statusCode(500).json({ message: err });
    }
}

export const notFoundError = (req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
}

export const notFoundErrorHandler = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
}