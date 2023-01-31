import { Request, Response } from 'express';
import { PrismaDeliveriesRepository } from '../../../../repositories/prisma/PrismaDeliveriesRepository';
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase';

export class UpdateDeliverymanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: delivery_id } = request.params;
        const deliveryman_id = request.deliveryman_id;

        const deliveriesRepository = new PrismaDeliveriesRepository();
        const updateDelivermanUseCase = new UpdateDeliverymanUseCase(
            deliveriesRepository
        );

        await updateDelivermanUseCase.execute({ delivery_id, deliveryman_id });

        return response.status(204).send();
    }
}
