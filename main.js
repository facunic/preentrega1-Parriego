function mostrarAlert(mensaje) {
    alert(mensaje);
}

function preguntarNombre() {
    const nombre = prompt("Por favor, ingrese su nombre:");
    mostrarAlert(`Bienvenido a nuestro ecommerce, ${nombre}.`);
    return nombre;
}

function preguntarCategoria() {
    let opcion;
    while (opcion !== "1" && opcion !== "2") {
        opcion = prompt("¿Qué desea comprar?\nElija la opción 1 si son remeras, opción 2 si son pantalones:");
    }
    return opcion;
}

function confirmarCompra(categoria) {
    let producto = "";
    let precio = 0;

    if (categoria === "1") {
        producto = "remera";
        precio = 20; // Precio de la remera (puedes cambiarlo)
    } else if (categoria === "2") {
        producto = "pantalón";
        precio = 30; // Precio del pantalón (puedes cambiarlo)
    }

    const confirmacion = confirm(`Usted eligió ${producto}. Su precio es de $${precio}. ¿Desea comprar este artículo?`);

    if (confirmacion) {
        const direccion = prompt("Ingrese su dirección para realizar el envío del pedido:");
        mostrarAlert(`Su artículo será enviado a: ${direccion}.`);
        mostrarAlert("Muchas gracias por su compra.");
    } else {
        mostrarAlert("Muchas gracias por su visita.");
    }
}

function main() {
    const nombre = preguntarNombre();
    const categoria = preguntarCategoria();
    confirmarCompra(categoria);
}

main();
