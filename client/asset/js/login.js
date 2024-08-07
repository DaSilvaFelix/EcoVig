const correos = document.querySelector("#correos");
const password = document.querySelector("#contrasenia");
const formulario = document.getElementById("form");
const urlLogin = "http://localhost:4000/login";
var ingreso = {
  Email: "",
  contraseña: "",
};

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  ingreso.Email = correos.value;
  ingreso.contraseña = password.value;
  const metodo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ingreso),
  };
  const peticion = await fetch(urlLogin, metodo);
  const respuesta = await peticion.json();
  if (!peticion.ok) {
    alert(respuesta.msg);
  } else {
    alert(respuesta.msg);
    localStorage.setItem("token", respuesta.token);
    window.location.href = "/client/index.html";
  }
});
