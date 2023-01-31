import { compare } from 'bcrypt';
import { sign, TokenExpiredError } from 'jsonwebtoken';
import { IClientsRepository } from '../../../../repositories/interfaces/IClientsRepository';
import { AppError } from '../../../../shared/errors/AppErrort';

interface IAuthenticateClient {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    constructor(private clientsRepository: IClientsRepository) {}

    async execute({ username, password }: IAuthenticateClient) {
        const client = await this.clientsRepository.findByUsername(username);

        if (!client) {
            throw new AppError('Username or password wrong');
        }

        const passwordMatches = await compare(password, client.password);

        if (!passwordMatches) {
            throw new AppError('Username or password wrong');
        }

        const token = sign({ username }, process.env.JWT_SECRET, {
            subject: client.id,
            expiresIn: '1d'
        });

        return token;
    }
}
