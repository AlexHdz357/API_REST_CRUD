import { createNewReporte, deleteAllReportes, getReporteById, updateReporteById } from "../controllers/reportes.controller";

export const queries ={
    getAllReportes: 'SELECT * FROM Reporte',
    createNewReporte:
    "INSERT INTO Reporte (nombreProducto, prioridad, Descripcion, latitude, longitude) VALUES (@nombreProducto, @prioridad, @Descripcion, @latitude, @longitude)",
    getReporteById: 'SELECT * FROM Reporte WHERE IdReporte = @IdReporte',
    deleteReporte: 'DELETE FROM Reporte WHERE IdReporte = @IdReporte',
    deleteAllReportes: 'DELETE FROM Reporte',
    reiniciarIdReportes: 'DBCC CHECKIDENT (Reporte, RESEED, 0)',
    getTotalReportes: 'SELECT COUNT(*) FROM Reporte',
    updateReporteById: 'UPDATE Reporte SET nombreProducto = @nombreProducto, prioridad = @prioridad, Descripcion = @Descripcion, latitude = @latitude, longitude = @longitude WHERE IdReporte = @IdReporte'
};