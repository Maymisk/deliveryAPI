import { Router } from 'express';
import { CreateDeliveryController } from '../../../modules/delivery/useCases/CreateDelivery/CreateDeliveryController';
import { FindAvailableController } from '../../../modules/delivery/useCases/FindAvailable/FindAvailableController';
import { FinishDeliveryController } from '../../../modules/delivery/useCases/FinishDelivery/FinishDeliveryController';
import { UpdateDeliverymanController } from '../../../modules/delivery/useCases/UpdateDeliveryman/UpdateDeliverymanController';
import { ensureClientIsAuthenticated } from '../middlewares/EnsureClientIsAuthenticated';
import { ensureDeliverymanIsAuthenticated } from '../middlewares/EnsureDeliverymanIsAuthenticated';
import { deliverymenRoutes } from './deliverymen.routes';

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
deliveriesRoutes.post(
    '/create',
    ensureClientIsAuthenticated,
    createDeliveryController.handle
);

const findAvailableController = new FindAvailableController();
deliveriesRoutes.get(
    '/available',
    ensureDeliverymanIsAuthenticated,
    findAvailableController.handle
);

const finishDeliveryController = new FinishDeliveryController();
deliveriesRoutes.put(
    '/finish/:id',
    ensureDeliverymanIsAuthenticated,
    finishDeliveryController.handle
);

const updateDeliverymanController = new UpdateDeliverymanController();
deliveriesRoutes.put(
    '/updateDeliveryman/:id',
    ensureDeliverymanIsAuthenticated,
    updateDeliverymanController.handle
);

export { deliveriesRoutes };
