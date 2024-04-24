import { query } from 'mssql';
import {getConnection, sql, queries } from '../database'


export const getReportes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllReportes);
        console.log(result);
    
        res.json(result.recordset);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewReporte = async (req, res) => {
    const {idReporte, idEmpleado, nombreProducto, prioridad, Descripcion, latitude, longitude, estatus, imagenTexto, completado} = req.body
    if (idEmpleado == null || nombreProducto == null || prioridad == null || Descripcion == null || latitude == null || longitude == null || imagenTexto == null) {
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});
    }
    
    try {
        const pool = await getConnection();   
        await pool.request()
        .input("idEmpleado", sql.Int, idEmpleado)
        .input("nombreProducto", sql.VarChar, nombreProducto)
        .input("prioridad", sql.Int, prioridad)
        .input("Descripcion", sql.VarChar, Descripcion)
        .input("latitude", sql.VarChar, latitude)
        .input("longitude", sql.VarChar, longitude)
        .input("estatus", sql.Bit, estatus || null)
        .input("imagenTexto", sql.VarChar, imagenTexto)
        .input("completado", sql.Bit, completado || null)
        .query(queries.createNewReporte);

        res.json({idEmpleado, nombreProducto, prioridad, Descripcion, latitude, longitude, estatus, imagenTexto, completado});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }   
};

export const getReporteById = async (req, res) => {
    const {IdReporte} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input("IdReporte", IdReporte)
    .query(queries.getReporteById)

    console.log(result);

    res.send(result.recordset[0]);
};

export const deleteReporte = async (req, res) => {
    const {IdReporte} = req.params;

    if (IdReporte == null) {
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});
    }

    const pool = await getConnection();
    const result = await pool.request()
    .input("IdReporte", IdReporte)
    .query(queries.deleteReporte)

    res.sendStatus(204);
};

export const deleteAllReportes = async (req, res) => {
    try {
        const pool = await getConnection();
        await pool.request().query(queries.deleteAllReportes);
        res.sendStatus(204);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
};

export const reiniciarIdReportes = async (req, res) => {
    try {
        const pool = await getConnection();
        await pool.request().query(queries.reiniciarIdReportes);
        res.sendStatus(204);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalReportes = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.getTotalReportes);

    res.json(result.recordset[0][''])

};

export const updateReporteById = async (req, res) => {
    const {idEmpleado, nombreProducto, prioridad, Descripcion, latitude, longitude, estatus, imagenTexto, completado} = req.body
    const {IdReporte} = req.params;
    if (idEmpleado == null || nombreProducto == null || prioridad == null || Descripcion == null || latitude == null || longitude == null || estatus == null || imagenTexto == null || completado == null || IdReporte == null) {
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});
    }

    const pool = await getConnection()
    await pool.request()
    .input("idEmpleado", sql.Int, idEmpleado)
    .input("nombreProducto", sql.VarChar, nombreProducto)
    .input("prioridad", sql.Int, prioridad)
    .input("Descripcion", sql.VarChar, Descripcion)
    .input("latitude", sql.VarChar, latitude)
    .input("longitude", sql.VarChar, longitude)
    .input("IdReporte", sql.Int, IdReporte)
    .input("estatus", sql.Bit, estatus)
    .input("imagenTexto", sql.VarChar, imagenTexto)
    .input("completado", sql.Bit, completado)
    .query(queries.updateReporteById);

    res.json({idEmpleado, nombreProducto, prioridad, Descripcion, latitude, longitude, estatus, imagenTexto, completado});
};

