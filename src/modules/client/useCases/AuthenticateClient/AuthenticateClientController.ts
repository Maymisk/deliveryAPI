import { Request, Response } from 'express';
import { PrismaClientsRepository } from '../../../../repositories/prisma/PrismaClientsRepository';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

export class AuthenticateClientController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const clientsRepository = new PrismaClientsRepository();
        const authenticateUserUseCase = new AuthenticateClientUseCase(
            clientsRepository
        );

        const token = await authenticateUserUseCase.execute({
            username,
            password
        });

        return response.json({ username, token });
    }
}
