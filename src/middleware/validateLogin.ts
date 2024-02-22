import { Request, Response, NextFunction } from 'express';

function validateLogin(req: Request, res: Response, next: NextFunction): void | Response {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
}

export default validateLogin;