import { Delivery } from '@prisma/client';

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

export interface IDeliveriesRepository {
    create({ client_id, item_name }: ICreateDelivery): Promise<void>;
    updateEndDate({
        deliveryman_id,
        delivery_id
    }: IUpdateEndDate): Promise<void>;
    updateDeliveryman({
        delivery_id,
        deliveryman_id
    }: IUpdateDeliveryman): Promise<void>;
    findAvailable(): Promise<Delivery[]>;
}
