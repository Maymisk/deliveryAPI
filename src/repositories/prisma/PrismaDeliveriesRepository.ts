import { Delivery } from '@prisma/client';
import { prisma } from '../../prisma';
import { IDeliveriesRepository } from '../interfaces/IDeliveriesRepository,';

interface ICreateDelivery {
    client_id: string;
    item_name: string;
}
interface IUpdateEndDate {
    deliveryman_id: string;
    delivery_id: string;
}

interface IUpdateDeliveryman {
    delivery_id: string;
    deliveryman_id: string;
}

export class PrismaDeliveriesRepository implements IDeliveriesRepository {
    async create({ client_id, item_name }: ICreateDelivery): Promise<void> {
        await prisma.delivery.create({
            data: {
                item_name,
                client_id
            }
        });
    }

    async updateEndDate({
        deliveryman_id,
        delivery_id
    }: IUpdateEndDate): Promise<void> {
        await prisma.delivery.updateMany({
            data: {
                end_date: new Date()
            },
            where: {
                id: delivery_id,
                deliveryman_id
            }
        });
    }

    async updateDeliveryman({
        delivery_id,
        deliveryman_id
    }: IUpdateDeliveryman): Promise<void> {
        await prisma.delivery.updateMany({
            data: {
                deliveryman_id
            },
            where: {
                id: delivery_id,
                deliveryman_id: null
            }
        });
    }

    async findAvailable(): Promise<Delivery[]> {
        const deliveries = await prisma.delivery.findMany({
            where: {
                end_date: null,
                deliveryman_id: null
            }
        });

        return deliveries;
    }
}
