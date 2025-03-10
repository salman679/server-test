"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message || 'Internal Server Error',
        error: err,
    });
};
exports.default = globalErrorHandler;
