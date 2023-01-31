import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IDeliverymenRepository } from '../../../../repositories/interfaces/IDeliverymenRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IAuthenticateDeliveryman {
	username: string;
	password: string;
}

export class AuthenticateDeliverymanUseCase {
	constructor(private deliverymenRepository: IDeliverymenRepository) {}

	async execute({ username, password }: IAuthenticateDeliveryman) {
		const deliveryman = await this.deliverymenRepository.findByUsername(
			username
		);

		if (!deliveryman) {
			throw new AppError('Username or password wrong');
		}

		const passwordMatches = await compare(password, deliveryman.password);

		if (!passwordMatches) {
			throw new AppError('Username or password wrong');
		}

		const token = sign({ username }, process.env.JWT_SECRET, {
			subject: deliveryman.id,
			expiresIn: '1d',
		});

		return token;
	}
}
