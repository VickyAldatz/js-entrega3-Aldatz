

const userlogin= document.getElementById("userlogin");
const divproductos= document.getElementById("productos");

let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded", ()=> {
    generarCardsProductos (productosDisponibles)
});

const generarCardsProductos = (productos) => {
    productos.forEach(producto => {
        let card = document.createElement("div");

        card.className= "producto";
        card.innerHTML=  `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.categoria}</p>
    <p class="card-text">$${producto.precio}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> `
    })
}