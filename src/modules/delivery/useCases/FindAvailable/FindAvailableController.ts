import { Request, Response } from 'express';
import { PrismaDeliveriesRepository } from '../../../../repositories/prisma/PrismaDeliveriesRepository';
import { FindAvailableUseCase } from './FindAvailableUseCase';

export class FindAvailableController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deliveriesRepository = new PrismaDeliveriesRepository();
        const findAvailableUseCase = new FindAvailableUseCase(
            deliveriesRepository
        );

        const deliveries = await findAvailableUseCase.execute();

        return response.json(deliveries);
    }
}
