import { Delivery, Deliveryman } from '@prisma/client';
import { prisma } from '../../prisma';
import { IDeliverymenRepository } from '../interfaces/IDeliverymenRepository';

interface ICreateDeliveryman {
	username: string;
	password: string;
}

interface IFindDeliveries {
	id: string;
	username: string;
	deliveries: Delivery[];
}

export class PrismaDeliverymenRepository implements IDeliverymenRepository {
	async create({ username, password }: ICreateDeliveryman): Promise<void> {
		await prisma.deliveryman.create({
			data: {
				username,
				password,
			},
		});
	}

	async findByUsername(username: string): Promise<Deliveryman> {
		const deliveryman = await prisma.deliveryman.findFirst({
			where: {
				username: {
					equals: username,
					mode: 'insensitive',
				},
			},
		});

		return deliveryman;
	}

	async findDeliveriesById(
		deliveryman_id: string
	): Promise<IFindDeliveries[]> {
		const deliveries = await prisma.deliveryman.findMany({
			select: {
				id: true,
				username: true,
				deliveries: true,
			},
			where: {
				id: deliveryman_id,
			},
		});

		return deliveries;
	}
}
