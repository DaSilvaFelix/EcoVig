const primerDiv = document.getElementById("primer-div");
const segundoDiv = document.getElementById("segundo-div");
const ulrPais = "http://localhost:4000/countries";
const urlRegister = "http://localhost:4000/register";
const selectorPais = document.getElementById("paises");
const selectorProvincias = document.getElementById("provincias");
const enviar = document.getElementById("enviar");
let contrasenia;
var paisesSelecionado;
var provinciaSeleccionada;
var datosUser = {
  Nombre_Apellido: "",
  Email: "",
  Fecha_Nacimiento: "",
  id_pais: "",
  id_provincia: "",
  contraseña: "",
};
function changerDiv() {
  var names = document.getElementById("names");
  var email = document.getElementById("email");
  var fechaN = document.getElementById("fecha");
  primerDiv.style.display = "none";
  segundoDiv.style.display = "block";
  datosUser.Nombre_Apellido = names.value;
  datosUser.Email = email.value;
  datosUser.Fecha_Nacimiento = fechaN.value;
}
const traerPaises = async (link) => {
  const extraccion = await fetch(link);
  const data = await extraccion.json();
  data.forEach((element) => {
    selectorPais.innerHTML += `<option value="${element.id_pais}">${element.nombre}</option>`;
  });
};
traerPaises(ulrPais);
const traerProvincia = async () => {
  const extraccion = await fetch(
    `http://localhost:4000/states/${paisesSelecionado.value}`
  );
  const data = await extraccion.json();
  data.forEach((element) => {
    selectorProvincias.innerHTML += `<option value="${element.id_provincia}">${element.nombre}</option>`;
  });
};
selectorPais.addEventListener("change", () => {
  paisesSelecionado = document.getElementById("paises");
  datosUser.id_pais = paisesSelecionado.value;
  selectorProvincias.innerHTML =
    "<option value='' >Seleccione Su Provincia</option>";
  traerProvincia();
});
selectorProvincias.addEventListener("change", () => {
  provinciaSeleccionada = document.getElementById("provincias");
  datosUser.id_provincia = provinciaSeleccionada.value;
});
enviar.addEventListener("click", async () => {
  contrasenia = document.getElementById("contraseña");
  datosUser.contraseña = contrasenia.value;
  console.log(datosUser);
  const metodo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosUser),
  };
  await fetch(urlRegister, metodo)
    .then((response) => response.json())
    .then((data) => {
      alert(data.msg);
    });
  window.location.href = "/client/login.html";
});
