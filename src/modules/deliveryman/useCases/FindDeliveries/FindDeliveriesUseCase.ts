import { IDeliverymenRepository } from '../../../../repositories/interfaces/IDeliverymenRepository';

export class FindDeliveriesUseCase {
    constructor(private deliverymenRepository: IDeliverymenRepository) {}

    async execute(deliveryman_id: string) {
        const deliveries = await this.deliverymenRepository.findDeliveriesById(
            deliveryman_id
        );

        return deliveries;
    }
}
