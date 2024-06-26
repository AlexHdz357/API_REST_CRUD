import {Router} from 'express';

import {createNewReporte, deleteAllReportes, deleteReporte, getReporteById, getReportes, getTotalReportes, reiniciarIdReportes, updateReporteById, updateReporteField} from '../controllers/reportes.controller';

const router = Router();

router.get('/reportes', getReportes)

router.post('/reportes', createNewReporte);

router.get('/reportes/count', getTotalReportes);

router.get('/reportes/:IdReporte', getReporteById);

router.delete('/reportes/:IdReporte', deleteReporte);

router.delete('/reportes', deleteAllReportes);

router.post('/reportes/reiniciarIdReportes', reiniciarIdReportes);

router.put('/reportes/:IdReporte', updateReporteById);

router.post('/reportes/:IdReporte/updateField', updateReporteField);
export default router;