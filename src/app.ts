import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from './shared/errors/AppError';
import { router } from './shared/http';

const app = express();

app.use(express.json());

app.use(router);

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response
				.status(err.statusCode)
				.json({ message: err.message });
		}

		return response
			.status(500)
			.json({ 'Internal server error: ': err.message });
	}
);

export { app };
