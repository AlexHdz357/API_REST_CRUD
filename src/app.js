import express from 'express';
import config from './config';


const app = express()

// settings
app.set('port', config.port)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

import reportesRoutes from './routes/reportes.routes'

export default app;