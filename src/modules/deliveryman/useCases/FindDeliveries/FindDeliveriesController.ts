import { Request, Response } from 'express';
import { PrismaClientsRepository } from '../../../../repositories/prisma/PrismaClientsRepository';
import { PrismaDeliverymenRepository } from '../../../../repositories/prisma/PrismaDeliverymenRepository';
import { FindDeliveriesUseCase } from './FindDeliveriesUseCase';

export class FindDeliveriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deliveryman_id = request.deliveryman_id;

        const deliverymenRepository = new PrismaDeliverymenRepository();
        const findDeliveriesUseCase = new FindDeliveriesUseCase(
            deliverymenRepository
        );

        const deliveries = await findDeliveriesUseCase.execute(deliveryman_id);

        return response.json(deliveries);
    }
}
