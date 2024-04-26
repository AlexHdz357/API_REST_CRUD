import { getAllReportes, createNewReporte, deleteReporte, reiniciarIdReportes, getTotalReportes, deleteAllReportes, getReporteById, updateReporteById, updateReporteField} from "../controllers/reportes.controller";
import { createNewEmpleado, getAllEmpleados, getEmpleadosReportesAprobados } from "../controllers/empleados.controller";
export const queries ={
    getAllReportes: 'SELECT * FROM Reporte',
    createNewReporte:
    'INSERT INTO Reporte (idEmpleado, nombreProducto, prioridad, Descripcion, latitude, longitude, aprobado, imagenTexto, completado) VALUES (@idEmpleado, @nombreProducto, @prioridad, @Descripcion, @latitude, @longitude, @aprobado, @imagenTexto, @completado)',
    getReporteById: 'SELECT * FROM Reporte WHERE IdReporte = @IdReporte',
    deleteReporte: 'DELETE FROM Reporte WHERE IdReporte = @IdReporte',
    deleteAllReportes: 'DELETE FROM Reporte',
    reiniciarIdReportes: 'DBCC CHECKIDENT (Reporte, RESEED, 0)',
    getTotalReportes: 'SELECT COUNT(*) FROM Reporte',
    updateReporteById: 'UPDATE Reporte SET idEmpleado = @idEmpleado, nombreProducto = @nombreProducto, prioridad = @prioridad, Descripcion = @Descripcion, latitude = @latitude, longitude = @longitude, aprobado = @aprobado, imagenTexto = @imagenTexto, completado = @completado WHERE IdReporte = @IdReporte',
    createNewEmpleado: 'INSERT INTO Empleado (NombreCompleto, Rol, Puntos) VALUES (@NombreCompleto, @Rol, @Puntos)',
    getAllEmpleados: 'SELECT * FROM Empleado',
    updateField: 'UPDATE Reporte SET ${field} = @value WHERE IdReporte = @IdReporte',
    getEmpleadosReportesAprobados: `
        SELECT E.NombreCompleto, COUNT(R.idReporte) as Puntos
        FROM Empleado E
        LEFT JOIN Reporte R ON E.IdEmpleado = R.idEmpleado
        WHERE R.aprobado = 1
        GROUP BY E.NombreCompleto
        ORDER BY Puntos DESC
    `
};