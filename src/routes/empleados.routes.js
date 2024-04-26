import {Router} from 'express';

import {createNewEmpleado, getAllEmpleados, getEmpleadosReportesAprobados} from '../controllers/empleados.controller';

const router = Router();

router.get('/empleados', getAllEmpleados);

router.get('/empleados/leaderboard', getEmpleadosReportesAprobados);

router.post('/empleados', createNewEmpleado);


export default router;