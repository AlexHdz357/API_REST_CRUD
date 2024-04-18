import {Router} from 'express';

import {createNewReporte, getReportes} from '../controllers/reportes.controller';

const router = Router();

router.get('/reportes', getReportes)

router.post('/reportes', createNewReporte);

router.delete('/reportes')

router.put('/reportes')


export default router;