import { Router } from 'express';

import userRoutes from '../../modules/users/infra/http/routes/user.routes';

const route = Router();

route.get('/', (request, response) => {
  return response.json({ Status: 'ok' });
});

route.use('/users', userRoutes);

export default route;
