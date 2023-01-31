import { Request, Response } from 'express';
import { PrismaClientsRepository } from '../../../../repositories/prisma/PrismaClientsRepository';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const clientsRepository = new PrismaClientsRepository();
        const createClientUseCase = new CreateClientUseCase(clientsRepository);

        await createClientUseCase.execute({ username, password });

        return response.status(201).send();
    }
}
