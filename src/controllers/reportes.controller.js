import {getConnection} from '../database/connection'

export const getReportes = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Reporte");
    console.log(result);

    res.json(result.recordset);
};

export const createNewReporte = (req, res) => {
    res.json('Creando un nuevo reporte');
};