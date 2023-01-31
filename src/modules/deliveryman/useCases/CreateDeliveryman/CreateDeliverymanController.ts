import { Request, Response } from 'express';
import { PrismaDeliverymenRepository } from '../../../../repositories/prisma/PrismaDeliverymenRepository';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

export class CreateDeliverymanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const deliverymenRepository = new PrismaDeliverymenRepository();
        const createDeliverymanUseCase = new CreateDeliverymanUseCase(
            deliverymenRepository
        );

        await createDeliverymanUseCase.execute({ username, password });

        return response.status(201).send();
    }
}
