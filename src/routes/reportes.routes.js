import {Router} from 'express';

import {createNewReporte, deleteAllReportes, deleteReporte, getReporteById, getReportes, getTotalReportes, reiniciarIdReportes, reiniciarReportes} from '../controllers/reportes.controller';

const router = Router();

router.get('/reportes', getReportes)

router.post('/reportes', createNewReporte);

router.get('/reportes/count', getTotalReportes);

router.get('/reportes/:IdReporte', getReporteById);

router.delete('/reportes/:IdReporte', deleteReporte);

router.delete('/reportes', deleteAllReportes);

router.post('/reportes/reiniciarIdReportes', reiniciarIdReportes);

export default router;