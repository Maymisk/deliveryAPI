import { IClientsRepository } from '../../../../repositories/interfaces/IClientsRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { hash } from 'bcrypt';
import { IDeliverymenRepository } from '../../../../repositories/interfaces/IDeliverymenRepository';

interface ICreateDeliveryman {
	username: string;
	password: string;
}

export class CreateDeliverymanUseCase {
	constructor(private deliverymenRepository: IDeliverymenRepository) {}

	async execute({ username, password }: ICreateDeliveryman) {
		const deliveryman = await this.deliverymenRepository.findByUsername(
			username
		);

		if (deliveryman) {
			throw new AppError(
				'A deliveryman with this username already exists!'
			);
		}

		const hashedPassword = await hash(password, 10);

		await this.deliverymenRepository.create({
			username,
			password: hashedPassword,
		});
	}
}
