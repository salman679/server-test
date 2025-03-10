/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    message: 'API Not Found',
    error: '',
  });
};

export default notFound;
