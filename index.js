const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const pizzaContainer=document.querySelector(".pizzaContainer");
const pizzaImage = document.querySelector(".pizzaImage");
const input = document.querySelector(".pizzaInput");
const button = document.querySelector(".pizzaBtn");
const container = document.querySelector("#container");


function buscarPizzaPorId(id) {
  return pizzas.find((pizza) => pizza.id === id);
}

function renderizarPizza(pizza) {
  container.innerHTML = "";
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <h2>${pizza.nombre}</h2>
  <h3>Precio: $${pizza.precio}</h3>
  `;
  container.appendChild(card);
  pizzaImage.src = pizza.imagen;
  pizzaImage.style.display = "block";
}

function renderizarError(mensaje) {
  container.innerHTML = "";
  const error = document.createElement("div");
  error.classList.add("error");
  error.textContent = mensaje;
  container.appendChild(error);
  pizzaImage.style.display = "none";
}

function guardarUltimaPizzaBuscada(pizza) {
  localStorage.setItem("ultimaPizza", JSON.stringify(pizza));
}

function obtenerUltimaPizzaBuscada() {
  const ultimaPizza = localStorage.getItem("ultimaPizza");
  return ultimaPizza ? JSON.parse(ultimaPizza) : null;
}

button.addEventListener("click", ()=> {
  const inputNumero = parseInt(input.value);
  const pizzaEncontrada = buscarPizzaPorId(inputNumero);

  if (pizzaEncontrada) {
    renderizarPizza(pizzaEncontrada);
    guardarUltimaPizzaBuscada(pizzaEncontrada);
  } else {
    renderizarError("PIZZA NO DISPONIBLE");
  }
});

// Al cargar la página, mostrar la última pizza buscada
document.addEventListener("DOMContentLoaded", ()=> {
  const ultimaPizza = obtenerUltimaPizzaBuscada();
  if (ultimaPizza) {
    renderizarPizza(ultimaPizza);
  }
});
