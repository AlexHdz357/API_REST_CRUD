// Supongamos que estás intentando obtener un formulario con el ID 'mi-formulario'
let formulario = document.getElementById('formulario');


function encode() {
  var selectedfile = document.getElementById("imagen").files;
  if (selectedfile.length > 0) {
      var imageFile = selectedfile[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result;
          var newImage = document.createElement('img');
          newImage.src = srcData;
          var img64=srcData;
          document.getElementById("dummy").innerHTML = newImage.outerHTML;
          document.getElementById("im64").innerHTML=img64.substring(23);
          gemini(img64.substring(23));

          // Guardar la imagen en texto en un campo oculto del formulario
          document.getElementById('imagenTexto').value = img64.substring(23);
      }
      fileReader.readAsDataURL(imageFile);
  }
}


if (formulario) {
  formulario.addEventListener('change', function() {
    var image = document.getElementById('imagen');
    var submitButton = document.getElementById('enviar-formulario');
    if (image.files.length > 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
  });

  formulario.addEventListener('submit', async function(e) {
    e.preventDefault();

    const nombreProducto = document.getElementById('nombreProducto').value;
    const idEmpleado = document.getElementById('idEmpleado').value;
    const prioridad = document.getElementById('prioridad').value;
    const Descripcion = document.getElementById('Descripcion').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const estatus = null;
    const imagenTexto = document.getElementById('imagenTexto').value;
    const completado = null;
  
    const data = { nombreProducto, idEmpleado, prioridad, Descripcion, latitude, longitude, estatus, imagenTexto, completado};
    const response = await fetch('http://localhost:3000/reportes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    const result = await response.json();
    console.log(result);
    console.log('Formulario enviado');
  });

}


// Obtener y mostrar todos los reportes
fetch('http://localhost:3000/reportes')
.then(response => response.json())
.then(reportes => {
    // Crear la tabla y agregarle las clases de Bootstrap
    let table = document.createElement('table');
    table.className = 'table table-striped table-hover';

    // Crear los títulos de las columnas
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    ['Id del reporte', 'Id del Empleado', 'Nombre Producto', 'Prioridad', 'Descripción', 'Latitud', 'Longitud', 'estatus', 'imagenTexto', 'completado'].forEach(text => {
    let th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    let tbody = document.createElement('tbody');

    reportes.forEach(reporte => {
        let row = document.createElement('tr');
        let descripcionCorta = reporte.Descripcion.substring(0, 20);
        if (reporte.Descripcion.length > 20) {
            descripcionCorta += '...';
        }
        [reporte.idReporte, reporte.idEmpleado, reporte.nombreProducto, reporte.prioridad, descripcionCorta, reporte.latitude, reporte.longitude, reporte.estatus, reporte.imagenTexto, reporte.completado].forEach(text => {
            let td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });

    // Crear el botón
    let buttonTd = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = 'Ver reporte';
    button.className = 'btn btn-primary';  // Agregar clases de Bootstrap al botón

    // Agregar un controlador de eventos al botón
    button.addEventListener('click', function() {
        // Redirigir al usuario a la vista del reporte específico
        window.location.href = '/VistaReporte.html?idReporte=' + reporte.idReporte;
    });

    buttonTd.appendChild(button);
    row.appendChild(buttonTd);

    tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Agregar la tabla al DOM
    document.getElementById('reportes-table').appendChild(table);
})
.catch(error => console.error('Error:', error));

// Obtener el ID del reporte de la URL
let urlParams = new URLSearchParams(window.location.search);
let idReporte = urlParams.get('idReporte');

// Verificar si el ID del reporte está presente
if (idReporte) {
  // Hacer una solicitud GET a la API para obtener la información del reporte
  fetch('http://localhost:3000/reportes/' + idReporte)
    .then(response => response.json())
    .then(reporte => {
      // Mostrar la información del reporte en la página
      document.getElementById('idReporte').textContent = reporte.idReporte;
      document.getElementById('idEmpleado').textContent = reporte.idEmpleado;
      document.getElementById('nombreProducto').textContent = reporte.nombreProducto;
      document.getElementById('prioridad').textContent = reporte.prioridad;
      document.getElementById('Descripcion').textContent = reporte.Descripcion;
      document.getElementById('latitude').textContent = reporte.latitude;
      document.getElementById('longitude').textContent = reporte.longitude;
      document.getElementById('estatus').textContent = reporte.estatus;
      document.getElementById('imagenTexto').textContent = reporte.imagenTexto;
      document.getElementById('completado').textContent = reporte.completado;
    });
}



// Hacer una solicitud GET a la API para obtener la información de los empleados
fetch('http://localhost:3000/empleados')
  .then(response => response.json())
  .then(empleados => {
    // Crear una tabla
    let table = document.createElement('table');
    table.className = 'table table-striped';

    // Crear el encabezado de la tabla
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    ['ID', 'Nombre', 'Rol', 'Puntos'].forEach(headerText => {
      let th = document.createElement('th');
      th.textContent = headerText;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    let tbody = document.createElement('tbody');
    empleados.forEach(empleado => {
      let tr = document.createElement('tr');
      [empleado.idEmpleado, empleado.NombreCompleto, empleado.Rol, empleado.Puntos].forEach(text => {
        let td = document.createElement('td');
        td.textContent = text;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Agregar la tabla al DOM
    document.getElementById('empleados-table').appendChild(table);
  })
  .catch(error => console.error('Error:', error));
