import { Router } from 'express';
import { AuthenticateClientController } from '../../../modules/client/useCases/AuthenticateClient/AuthenticateClientController';
import { CreateClientController } from '../../../modules/client/useCases/CreateClient/CreateClientController';
import { FindDeliveriesController } from '../../../modules/client/useCases/FindDeliveries/FindDeliveriesController';
import { ensureClientIsAuthenticated } from '../middlewares/EnsureClientIsAuthenticated';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
clientsRoutes.post('/register', createClientController.handle);

const authenticateClientController = new AuthenticateClientController();
clientsRoutes.post('/authenticate', authenticateClientController.handle);

const findDeliveriesController = new FindDeliveriesController();
clientsRoutes.get(
    '/deliveries',
    ensureClientIsAuthenticated,
    findDeliveriesController.handle
);

export { clientsRoutes };
