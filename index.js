//FEEDBACK UD2 - CORAL GUTIÉRREZ SÁNCHEZ

//1. CREO FUNCIONES

//Función que genera tabla de 3x5 de manera dinámica y añade las imágenes (imagenX.jpg)
function crearTabla() {
  //Creo un elemento table y tbody (forma parte de la estructura de tabla en el DOM)
  let body = document.querySelector("body");
  let tabla = document.createElement("table");
  let cuerpoTabla = document.createElement("tbody");

  //Creo las filas de la tabla con un bucle que hace 3 vueltas
  for (let i = 0; i < 3; i++) {
    fila = document.createElement("tr");

    //Creo las celdas y las imágenes de la tabla con un bucle que hace 5 vueltas
    for (let x = 1; x <= 5; x++) {
      let celda = document.createElement("td");
      let img = document.createElement("img");
      //Calculo el número que corresponde a cada nombre de imagen del 1 al 15 según la fila y la celda
      //Agrego la ruta de las imágenes con setAttribute
      let numero = i * 5 + x;
      img.setAttribute("src", "img/imagen" + numero + ".jpeg");

      //Añado los nodos de imágenes a las celdas y las celdas a las filas
      celda.appendChild(img);
      fila.appendChild(celda);
    }

    //Añado las filas al cuerpo de la tabla
    cuerpoTabla.appendChild(fila);
  }
  //Añado la tabla al cuerpo de la tabla y el cuerpo al body del documento (antes de los demás elementos)
  //Agrego atributos a la tabla
  tabla.appendChild(cuerpoTabla);
  body.insertBefore(tabla, body.firstChild);
}

//Función para mostrar las imágenes usando la información del evento
function mostrar(evento) {
  let imagenes = document.images; //Uso el array images[] que contiene todas las imágenes del documento
  let boton = evento.target.id; //Accedo a la propiedad id del objeto que me devuelve elemento.target para saber qué botón se ha presionado

  for (let i = 0; i < imagenes.length; i++) {
    //Primero oculto todas las imágenes con la propiedad style.display = 'none'
    imagenes[i].style.display = "none";

    //Muestro las imágenes pares (num%2==0) si el parámetro pares es TRUE
    if ((i + 1) % 2 == 0 && boton === "pares") {
      imagenes[i].style.display = "block";

      //Muestro las imágenes impares (num%2!=0) si el parámetro pares es FALSE
    } else if ((i + 1) % 2 != 0 && boton === "impares") {
      imagenes[i].style.display = "block";

      //Muestro todas las imágenes si el parámetro todas es TRUE
    } else if (boton === "todas") {
      imagenes[i].style.display = "block";
    }
  }
}

//2. SELECCIONO ELEMENTOS DEL DOM

let pares = document.getElementById("pares");
let impares = document.getElementById("impares");
let todas = document.getElementById("todas");

//3. CREO MANEJADORES DE EVENTOS

//El evento load (cuando la página está cargada) llama a la función crearTabla()
window.addEventListener("load", crearTabla);

//El evento click en los botones llama a la función mostrar()
pares.addEventListener("click", function (evento) {
  mostrar(evento);
});
impares.addEventListener("click", function (evento) {
  mostrar(evento);
});
todas.addEventListener("click", function (evento) {
  mostrar(evento);
});
