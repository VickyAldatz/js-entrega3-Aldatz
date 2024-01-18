export const productos = [
    {id:1;
    nombre: "monstera";
    precio: 30000;
    imagen:
    categoría: plantas},

    {id:2;
    nombre: agapanthus;
    precio: 20000;
    imagen:
    categoría: plantas;},

    {id:3;
    nombre: jazmín;
    precio: 15000;
    imagen:
    categoría: plantas;},

    {id:4;
    nombre: maceta chica;
    precio: 15000;
    imagen:
    categoría: macetas;},

    {id:5;
    nombre: maceta grande;
    precio: 30000;
    imagen:
    categoría: macetas;},
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));