import { Client, Delivery } from '@prisma/client';

interface ICreateClient {
    username: string;
    password: string;
}

interface IFindDeliveries {
    id: string;
    username: string;
    deliveries: Delivery[];
}

export interface IClientsRepository {
    create({ username, password }: ICreateClient): Promise<void>;
    findByUsername(username: string): Promise<Client>;
    findDeliveriesById(client_id: string): Promise<IFindDeliveries[]>;
}
