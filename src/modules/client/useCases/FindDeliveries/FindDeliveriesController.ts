import { Request, Response } from 'express';
import { PrismaClientsRepository } from '../../../../repositories/prisma/PrismaClientsRepository';
import { FindDeliveriesUseCase } from './FindDeliveriesUseCase';

export class FindDeliveriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const client_id = request.client_id;

        const clientsRepository = new PrismaClientsRepository();
        const findDeliveriesUseCase = new FindDeliveriesUseCase(
            clientsRepository
        );

        const deliveries = await findDeliveriesUseCase.execute(client_id);

        return response.json(deliveries);
    }
}
