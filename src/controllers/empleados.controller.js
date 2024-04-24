import { query } from 'mssql';
import {getConnection, sql, queries } from '../database'


export const getAllEmpleados = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEmpleados);
        console.log(result);
    
        res.json(result.recordset);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
};


export const createNewEmpleado = async (req, res) => {
    const {NombreCompleto, Rol, Puntos} = req.body
    if (NombreCompleto == null || Rol == null) {
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});
    }

    try {
        const pool = await getConnection();   
        await pool.request()
        .input("NombreCompleto", sql.VarChar, NombreCompleto)
        .input("Rol", sql.VarChar, Rol)
        .input("Puntos", sql.Int, 0)
        .query(queries.createNewEmpleado);

        res.json({NombreCompleto, Rol, Puntos});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

