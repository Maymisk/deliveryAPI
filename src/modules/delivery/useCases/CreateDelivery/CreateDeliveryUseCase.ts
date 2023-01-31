import { IDeliveriesRepository } from '../../../../repositories/interfaces/IDeliveriesRepository,';

interface ICreateDelivery {
    item_name: string;
    client_id: string;
}

export class CreateDeliveryUseCase {
    constructor(private deliveriesRepository: IDeliveriesRepository) {}

    async execute({ item_name, client_id }: ICreateDelivery) {
        await this.deliveriesRepository.create({
            item_name,
            client_id
        });
    }
}
