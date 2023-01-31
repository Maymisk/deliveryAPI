import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { verify } from 'jsonwebtoken';

export async function ensureDeliverymanIsAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError('Token missing!', 401);
	}

	const [, token] = authHeader.split(' ');

	try {
		const { sub } = verify(token, process.env.JWT_SECRET);

		request.deliveryman_id = sub as string;

		return next();
	} catch (error) {
		throw new AppError('Invalid token!', 401);
	}
}
