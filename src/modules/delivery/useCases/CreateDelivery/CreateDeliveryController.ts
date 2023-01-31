import { Request, Response } from 'express';
import { PrismaDeliveriesRepository } from '../../../../repositories/prisma/PrismaDeliveriesRepository';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { item_name } = request.body;
        const client_id = request.client_id;

        const deliveriesRepository = new PrismaDeliveriesRepository();
        const createDeliveryUseCase = new CreateDeliveryUseCase(
            deliveriesRepository
        );

        await createDeliveryUseCase.execute({ item_name, client_id });

        return response.status(201).send();
    }
}
