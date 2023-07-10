// Crear un elemento <div>
let nuevoDiv = document.createElement('div');

// Asignar valores a los atributos
nuevoDiv.id = 'miDiv';
nuevoDiv.className = 'claseDiv';
nuevoDiv.setAttribute('data-info', 'Información adicional');
nuevoDiv.setAttribute('name', 'miDivName');
nuevoDiv.setAttribute('type', 'text');


// Asignar texto al elemento
let texto = document.createTextNode('Este es un nuevo div creado con JavaScript');
nuevoDiv.appendChild(texto);

// Agregar el elemento al documento
document.body.appendChild(nuevoDiv);


// Obtener el elemento por su id
let tituloElemento = document.getElementById("tituloPagina");

// Modificar la clase (elimine y luego la agregre)
tituloElemento.classList.remove("text-success");
tituloElemento.classList.add("text-danger");