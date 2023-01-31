import { Client, Delivery } from '@prisma/client';
import { prisma } from '../../prisma';
import { IClientsRepository } from '../interfaces/IClientsRepository';

interface ICreateClient {
	username: string;
	password: string;
}

interface IFindDeliveries {
	id: string;
	username: string;
	deliveries: Delivery[];
}

export class PrismaClientsRepository implements IClientsRepository {
	async create({ username, password }: ICreateClient): Promise<void> {
		await prisma.client.create({
			data: {
				username,
				password,
			},
		});
	}

	async findByUsername(username: string): Promise<Client> {
		const client = await prisma.client.findFirst({
			where: {
				username: {
					equals: username,
					mode: 'insensitive',
				},
			},
		});

		return client;
	}

	async findDeliveriesById(client_id: string): Promise<IFindDeliveries[]> {
		const deliveries = await prisma.client.findMany({
			select: {
				id: true,
				username: true,
				deliveries: true,
			},
			where: {
				id: client_id,
			},
		});

		return deliveries;
	}
}
