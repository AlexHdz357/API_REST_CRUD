import express from 'express';
import config from './config';
const cors = require('cors');
import reportesRoutes from './routes/reportes.routes';
import empleadosRoutes from './routes/empleados.routes';

const app = express()

// settings
app.set('port', config.port)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
  origin: 'http://localhost:5000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(reportesRoutes);
app.use(empleadosRoutes);


export default app;