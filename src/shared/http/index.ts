import { Router } from 'express';
import { clientsRoutes } from './routes/clients.routes';
import { deliveriesRoutes } from './routes/deliveries.routes';
import { deliverymenRoutes } from './routes/deliverymen.routes';

const router = Router();

router.use('/client', clientsRoutes);
router.use('/deliveryman', deliverymenRoutes);
router.use('/delivery', deliveriesRoutes);

export { router };
