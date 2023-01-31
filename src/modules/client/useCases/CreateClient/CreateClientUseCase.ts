import { IClientsRepository } from '../../../../repositories/interfaces/IClientsRepository';
import { AppError } from '../../../../shared/errors/AppErrort';
import { hash } from 'bcrypt';

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    constructor(private clientsRepository: IClientsRepository) {}

    async execute({ username, password }: ICreateClient) {
        const client = await this.clientsRepository.findByUsername(username);

        if (client) {
            throw new AppError('A client with this username already exists!');
        }

        const hashedPassword = await hash(password, 10);

        await this.clientsRepository.create({
            username,
            password: hashedPassword
        });
    }
}
