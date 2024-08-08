const menu = document.querySelector("#menu");
const lista = document.getElementById("lista");
const separador = document.getElementById("separador");
const menuLateral = document.getElementById("menu-lateral");
const listaLateral = document.getElementById("menuLateral");
const botonCerrar = document.getElementById("cerrar-menu");
const perfil = document.getElementById("login");
const iniciar = document.getElementById("iniciar-seccion");

menu.addEventListener("click", () => {
  if (lista.classList.contains("cerrarMenu")) {
    lista.classList.remove("cerrarMenu");
    lista.classList.add("abrirMenu");
  } else {
    lista.classList.remove("abrirMenu");
    lista.classList.add("cerrarMenu");
  }
});

menuLateral.addEventListener("click", () => {
  listaLateral.classList.remove("lateral");
  listaLateral.classList.add("lateralAbierto");
});

botonCerrar.addEventListener("click", () => {
  listaLateral.classList.add("lateral");
  listaLateral.classList.remove("lateralAbierto");
});

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  if (token) {
    iniciar.style.display = "none";

    perfil.innerHTML += `<button id = 'miPerfil'>Menu De Usuario</button>
          <div id="carta-opciones" class="abrirCarta">
            <ul id='lista-opciones'>
              <li><a href="">Perfil</a></li>
              <li><hr /></li>
              <li><a href="">Configuraciones</a></li>
              <li><hr /></li>
              <li><a href="">Actividades</a></li>
              <li><hr /></li>

            </ul>
          </div>`;

    const opciones = document.getElementById("miPerfil");

    opciones.addEventListener("click", () => {
      const opcionUser = document.getElementById("carta-opciones");
      if (opcionUser.classList.contains("abrirCarta")) {
        opcionUser.classList.remove("abrirCarta");
        opcionUser.classList.add("cerrarCarta");
      } else {
        opcionUser.classList.remove("cerrarCarta");
        opcionUser.classList.add("abrirCarta");
      }
    });
    const listaOpciones = document.getElementById("lista-opciones");
    listaOpciones.innerHTML += `<li><button id='cierre-seccion'>cerrar seccion</button></li>
    <li><hr /></li>`;
    const cierre = document.getElementById("cierre-seccion");
    cierre.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.reload();
    });
    const traerClimas = async () => {
      try {
        const peticion = await fetch("http://localhost:4000/climas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token, // Ajuste del encabezado de autorización
          },
        });
        const datos = await peticion.json();
        console.log(datos);
      } catch (error) {
        console.log(error);
      }
    };

    traerClimas();
  }
});
