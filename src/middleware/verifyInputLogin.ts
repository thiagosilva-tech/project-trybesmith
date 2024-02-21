import { Request, Response, NextFunction } from 'express';

async function verifyInputLogin(
  req: Request, 
  res: Response, 
  next: NextFunction,
) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
}

export default verifyInputLogin;