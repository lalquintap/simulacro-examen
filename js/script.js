boton_pregunta = document.getElementById("preguntas");

boton_pregunta.addEventListener("click", function () {
  alert("MundoMuñecas, encuentra muñecas internacionales");
});

let botones_agregar = document.querySelectorAll(".agregar-carrito");

botones_agregar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let cantidad = document.querySelector("#cantidad");
    cantidad.textContent = parseInt(cantidad.textContent) + 1;
  });
});

id = "agregar-carrito";
