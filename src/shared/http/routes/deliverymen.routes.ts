import { Router } from 'express';
import { AuthenticateDeliverymanController } from '../../../modules/deliveryman/useCases/AuthenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../../../modules/deliveryman/useCases/CreateDeliveryman/CreateDeliverymanController';
import { FindDeliveriesController } from '../../../modules/deliveryman/useCases/FindDeliveries/FindDeliveriesController';
import { ensureDeliverymanIsAuthenticated } from '../middlewares/EnsureDeliverymanIsAuthenticated';

const deliverymenRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
deliverymenRoutes.post('/register', createDeliverymanController.handle);

const authenticateDeliverymanController =
    new AuthenticateDeliverymanController();
deliverymenRoutes.post(
    '/authenticate',
    authenticateDeliverymanController.handle
);

const findDeliveriesController = new FindDeliveriesController();
deliverymenRoutes.get(
    '/deliveries',
    ensureDeliverymanIsAuthenticated,
    findDeliveriesController.handle
);

export { deliverymenRoutes };
