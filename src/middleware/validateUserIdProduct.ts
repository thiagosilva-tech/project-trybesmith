import { Request, Response, NextFunction } from 'express';

function validateUserIdProduct(req: Request, res: Response, next: NextFunction): void | Response {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }

  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  next();
}

export default validateUserIdProduct;