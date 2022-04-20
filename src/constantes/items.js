import image from "../assets/objetomuestra.png";
import image2 from "../assets/objetomuestra2.png";
import image3 from "../assets/objetomuestra3.png";
import banana from "../assets/banana.png";
import alarma from "../assets/alarma.png";
import book from "../assets/book.png";
import pepsi from "../assets/pepsi.png";
import papelhigienico from "../assets/papelhigienico.png";
import bowl from "../assets/bowl.png";
import phone from "../assets/phone.png";
import ring from "../assets/ring.png";
import salchicha from "../assets/salchicha.png";
import shirt from "../assets/shirt.png";

const producto = [
  {
    id: "0",
    name: "Zapatos Derby de Prada",
    description:
      "Zapato de vestir para mujer, Nuevo sin uso, modelo Prada Talles S-XL",
    img: [image],
    tags: "zapato,prada,mujer,nuevo,bonito,fashion,moda,grande,pequeño,s,m,l,xl,mediano,extra largo",
    precio: [16000],
    tamanio: ["S", "M", "L", "XL"],
    cantidad: [3, 2, 0, 1],
    categorias: ["Indumentaria", "Mujer", "Calzado", "Zapatos", "Prada"],
    estado: true,
  },
  {
    id: "1",
    name: "Coca-Cola sin Azucar",
    description:
      "Gaseosa sin Azucar de Coca-Cola, En tamaños 500ml 1.5L 2.5L y 3L",
    img: [image2],
    tags: "gaseosa,bebible,sin azucar,500ml,1.5L,2.5L,3L",
    precio: [100, 150, 190, 250, 300],
    tamanio: ["500ml", "1Litro", "1.5Litros", "2.5Litros", "3 Litros"],
    cantidad: [3, 2, 0, 1, 5],
    categorias: [
      "Almacen",
      "Alimentos",
      "Bebibles",
      "Gaseosas",
      "Coca-Cola",
      "Sin Azucar",
    ],
    estado: true,
  },
  {
    id: "2",
    name: "Alfa Romero 10000km",
    description:
      "Vehiculo automotor Alfa Romeo, algun modelo que no conozco, no entiendo mucho de autos, esto es un ejemplo",
    img: [image3],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [3500000],
    tamanio: ["one"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: false,
  },
  {
    id: "3",
    name: "Banana Chiquita",
    description:
      "Banana importada directamente de una industria malévola en una isla de América central",
    img: [banana],
    tags: "banana,fruta,0km,rojo,4puertas",
    precio: [100, 150, 190, 250, 300],
    tamanio: ["500 gr", "1 kilo", "1.5 Kilos", "2.5 Kilos", "3 Kilos"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
  {
    id: "4",
    name: "Alarma",
    description: "Alarma requiere doble baterias y suena fuerte.",
    img: [alarma],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [2500],
    tamanio: ["one"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
  {
    id: "5",
    name: "Libro JavaScript",
    description: "Libro de JavaScript escrito por David Flanagan",
    img: [book],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [15000],
    tamanio: ["one"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: false,
  },
  {
    id: "6",
    name: "Bowl",
    description:
      "Un Bowl en 4 distintos colores perfecto para ensalada de frutas",
    img: [bowl],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [1500],
    tamanio: ["Azul", "Blanco", "Negro", "Rojo"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
  {
    id: "7",
    name: "Papel higienico Scoot",
    description: "Papel higienico doble hoja, 80 metros",
    img: [papelhigienico],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [350],
    tamanio: ["one"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
  {
    id: "8",
    name: "Pepsi",
    description: "La gasoesa superior a Coca-Cola claramente por lejoz",
    img: [pepsi],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [100, 150, 190, 250, 300],
    tamanio: ["500ml", "1Litro", "1.5Litros", "2.5Litros", "3 Litros"],
    cantidad: [3, 2, 0, 1, 5],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
  {
    id: "9",
    name: "Iphone 11+S Plus└2",
    description:
      "iPhone algo, ya no sé, pero sale más que el auto y hace la mitad",
    img: [phone],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [3500001],
    tamanio: ["one"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
  {
    id: "10",
    name: "Salchichon",
    description:
      "Vehiculo automotor Alfa Romeo, algun modelo que no conozco, no entiendo mucho de autos, esto es un ejemplo",
    img: [salchicha],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [300],
    tamanio: ["one"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
  {
    id: "11",
    name: "The One Ring",
    description:
      "One ring to rule them all, one ring to find them, One ring to bring them all, and in the darkness bind them; In the Land of Mordor where the shadows lie.",
    img: [ring],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [999999],
    tamanio: ["one"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: false,
  },
  {
    id: "12",
    name: "Camisa celeste profesional",
    description: "Camisa celeste muy profesional si profesional",
    img: [shirt],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: [3500000],
    tamanio: ["S", "M", "L", "XL"],
    cantidad: [3, 2, 0, 1],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
    estado: true,
  },
];

export default producto;
