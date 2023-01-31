import { IClientsRepository } from '../../../../repositories/interfaces/IClientsRepository';

export class FindDeliveriesUseCase {
    constructor(private clientsRepository: IClientsRepository) {}

    async execute(client_id: string) {
        const deliveries = await this.clientsRepository.findDeliveriesById(
            client_id
        );

        return deliveries;
    }
}
