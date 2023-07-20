const pizzas = [{
        id: 1,
        nombre: "Pizza de Muzzarella",
        precio: 500,
        ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },

    {
        id: 2,
        nombre: "Pizza de Cebolla",
        precio: 1500,
        ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },

    {
        id: 3,
        nombre: "Pizza Napolitana",
        precio: 1350,
        ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },

    {
        id: 4,
        nombre: "Pizza 4 Quesos",
        precio: 1380,
        ingredientes: [
            "Muzzarella",
            "Tomate",
            "Queso Azul",
            "Parmesano",
            "Roquefort",
        ],
    },

    {
        id: 5,
        nombre: "Pizza Especial",
        precio: 1000,
        ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },

    {
        id: 6,
        nombre: "Pizza con Anana",
        precio: 600,
        ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
];

/* a)  Las pizzas que tengan un id impar. */

const idImpares = pizzas.filter((pizzas) => {
    return pizzas.id % 2 === 1;
});

console.log(idImpares);

idImpares.forEach((pizzas) => {
    console.log(`1) El producto ${pizzas.nombre} tiene id impar`);
});

/* b) Responder: ¿Hay alguna pizza que valga menos de $600? */
function pizzasPorDebajoDe600(pizzas) {
    return pizzas.filter((pizza) => pizza.precio < 600);
}

// Función para mostrar las pizzas por debajo de $600 de forma amigable
function mostrarPizzasAmigables(pizzas) {
    if (pizzas.length > 0) {
        console.log("2) Hay una pizza por debajo de $600:");
        pizzas.forEach((pizza) => {
            console.log(`- ${pizza.nombre} ($${pizza.precio})`);
        });
    } else {
        console.log("No hay pizzas por debajo de $600.");
    }
}

const pizzasMenoresASeiscientos = pizzasPorDebajoDe600(pizzas);
mostrarPizzasAmigables(pizzasMenoresASeiscientos);


/* c) El nombre de cada pizza con su respectivo precio. */

function obtenerInformacionPizzas(pizzas) {
    return pizzas.map((pizza) => {
        return { nombre: pizza.nombre, precio: pizza.precio };
    });
}
const informacionPizzas = obtenerInformacionPizzas(pizzas);

function mostrarInformacion(pizzas) {
    console.log("3) Menu Pizzas:");
    pizzas.forEach((pizza) => {
        console.log(`- ${pizza.nombre} ($${pizza.precio})`);
    });
}
mostrarInformacion(informacionPizzas);

/* d) Todos los ingredientes de cada pizza */

function obtenerIngredientesPizzas(pizzas) {
    return pizzas.map((pizza) => {
        return { nombre: pizza.nombre, ingredientes: pizza.ingredientes };
    });
}
const ingredientesPizzas = obtenerIngredientesPizzas(pizzas);

function mostrarIngredientes(pizzas) {
    console.log("4) Menu Pizzas:");
    pizzas.forEach((pizza) => {
        console.log(`- La ${pizza.nombre} contiene los siguientes ingredientes: ${pizza.ingredientes}`);
    });
}
mostrarIngredientes(ingredientesPizzas);