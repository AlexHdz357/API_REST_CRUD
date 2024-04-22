document.getElementById('CrearReporte').addEventListener('submit', function(event) {
  // Prevenir la recarga de la página
  event.preventDefault();

  // Recoger los datos del formulario
  const nombreProducto = document.getElementById('nombreProducto').value;
  const prioridad = document.getElementById('prioridad').value;
  const descripcion = document.getElementById('descripcion').value;
  const latitude = document.getElementById('latitude').value;
  const longitude = document.getElementById('longitude').value;

  // Crear el objeto reporte
  const reporte = {
      nombreProducto: nombreProducto,
      prioridad: prioridad,
      descripcion: descripcion,
      latitude: latitude,
      longitude: longitude,
  };

  // Hacer la solicitud POST a la API
  fetch('http://localhost:3000/reportes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(reporte),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Reporte creado:', data);
      // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
  })
  .catch((error) => {
      console.error('Error:', error);
      // Aquí puedes manejar los errores, por ejemplo, mostrar un mensaje de error
  });
});