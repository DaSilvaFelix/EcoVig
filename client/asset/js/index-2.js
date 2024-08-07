const clima = document.getElementById("lista-link");
const metodo = {};

const mostarClimas = (climas) => {
  clima.innerHTML = ``;
  clima.innerHTML += `<li><a href="#">${climas.tipo_de_climas}</a></li>
            <li><hr /></li>`;
};

const optenerClimas = async () => {
  localStorage.getItem("token");
  const respuesta = await fetch("");
};
