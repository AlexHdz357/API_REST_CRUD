import {Router} from 'express';

import {createNewEmpleado, getAllEmpleados} from '../controllers/empleados.controller';

const router = Router();

router.get('/empleados', getAllEmpleados);

router.post('/empleados', createNewEmpleado);

export default router;