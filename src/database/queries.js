import { getAllReportes, createNewReporte, deleteReporte, reiniciarIdReportes, getTotalReportes, deleteAllReportes, getReporteById, updateReporteById } from "../controllers/reportes.controller";
import { createNewEmpleado, getAllEmpleados } from "../controllers/empleados.controller";
export const queries ={
    getAllReportes: 'SELECT * FROM Reporte',
    createNewReporte:
    "INSERT INTO Reporte (idEmpleado, nombreProducto, prioridad, Descripcion, latitude, longitude, estatus, imagenTexto, completado) VALUES (@idEmpleado, @nombreProducto, @prioridad, @Descripcion, @latitude, @longitude, @estatus, @imagenTexto, @completado)",
    getReporteById: 'SELECT * FROM Reporte WHERE IdReporte = @IdReporte',
    deleteReporte: 'DELETE FROM Reporte WHERE IdReporte = @IdReporte',
    deleteAllReportes: 'DELETE FROM Reporte',
    reiniciarIdReportes: 'DBCC CHECKIDENT (Reporte, RESEED, 0)',
    getTotalReportes: 'SELECT COUNT(*) FROM Reporte',
    updateReporteById: 'UPDATE Reporte SET idEmpleado = @idEmpleado, nombreProducto = @nombreProducto, prioridad = @prioridad, Descripcion = @Descripcion, latitude = @latitude, longitude = @longitude, estatus = @estatus, imagenTexto = @imagenTexto, completado = @completado WHERE IdReporte = @IdReporte',
    createNewEmpleado: 'INSERT INTO Empleado (NombreCompleto, Rol, Puntos) VALUES (@NombreCompleto, @Rol, @Puntos)',
    getAllEmpleados: 'SELECT * FROM Empleado'
};