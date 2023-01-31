import { IDeliveriesRepository } from '../../../../repositories/interfaces/IDeliveriesRepository,';

export class FindAvailableUseCase {
    constructor(private deliveriesRepository: IDeliveriesRepository) {}

    async execute() {
        const deliveries = await this.deliveriesRepository.findAvailable();

        return deliveries;
    }
}
