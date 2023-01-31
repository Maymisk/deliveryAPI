import { Delivery, Deliveryman } from '@prisma/client';

interface ICreateDeliveryman {
    username: string;
    password: string;
}

interface IFindDeliveries {
    id: string;
    username: string;
    deliveries: Delivery[];
}

export interface IDeliverymenRepository {
    create({ username, password }: ICreateDeliveryman): Promise<void>;
    findByUsername(username: string): Promise<Deliveryman>;
    findDeliveriesById(deliveryman_id: string): Promise<IFindDeliveries[]>;
}
