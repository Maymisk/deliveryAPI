import { IDeliveriesRepository } from '../../../../repositories/interfaces/IDeliveriesRepository,';

interface IFinishDelivery {
    delivery_id: string;
    deliveryman_id: string;
}

export class FinishDeliveryUseCase {
    constructor(private deliveriesRepository: IDeliveriesRepository) {}

    async execute({ delivery_id, deliveryman_id }: IFinishDelivery) {
        await this.deliveriesRepository.updateEndDate({
            delivery_id,
            deliveryman_id
        });
    }
}
