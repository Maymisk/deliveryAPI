import { IDeliveriesRepository } from '../../../../repositories/interfaces/IDeliveriesRepository,';

interface IUpdateDeliveryman {
    delivery_id: string;
    deliveryman_id: string;
}

export class UpdateDeliverymanUseCase {
    constructor(private deliveriesRepository: IDeliveriesRepository) {}

    async execute({ delivery_id, deliveryman_id }: IUpdateDeliveryman) {
        await this.deliveriesRepository.updateDeliveryman({
            delivery_id,
            deliveryman_id
        });
    }
}
