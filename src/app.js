import express from 'express';
import config from './config';
import reportesRoutes from './routes/reportes.routes';

const app = express()

// settings
app.set('port', config.port)

app.use(reportesRoutes)

export default app;