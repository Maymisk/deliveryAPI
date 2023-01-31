import { Request, Response } from 'express';
import { PrismaDeliverymenRepository } from '../../../../repositories/prisma/PrismaDeliverymenRepository';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { username, password } = request.body;

		const deliverymenRepository = new PrismaDeliverymenRepository();
		const authenticateUserUseCase = new AuthenticateDeliverymanUseCase(
			deliverymenRepository
		);

		const token = await authenticateUserUseCase.execute({
			username,
			password,
		});

		return response.json({ username, token });
	}
}
