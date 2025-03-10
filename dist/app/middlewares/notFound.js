"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(400).json({
        message: 'API Not Found',
        error: '',
    });
};
exports.default = notFound;
