let arrayProductos = [];
do {
    var opcion = prompt("Ingrese una opcion:\n 1. Añadir producto\n 2. Modificar Stock \n 3.Registrar venta y modificar Stock \n 4. Mostrar pro,edio de ventas realizadas \n 5. Mostrar productos con stock 0 \n 6 Salir");
    switch (opcion) {
        case "1":
            let codigo = prompt("ingrese codigo del producto");
            let descrip = prompt("ingrese descripcion del producto");
            let tipo = prompt("ingrese tipo del producto");
            let precio_compra = prompt("ingrese precio de compra del producto");
            let precio_venta = prompt("ingrese precio de venta del producto");
            //let stock = prompt("ingrese stock del producto");
            addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock=0);
            break;
        case "2":
            console.log(array[0]);
            break;
        case "3":

            break;
        case "4":

            break;
        case "5":

            break;
        default:
            console.log("ingrese dato correcto");
            break;
    }
}
while (opcion != 6);
console.log("adios");

function addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock) {
    arrayProductos.push({ codigo, descrip, tipo, precio_compra, precio_venta, stock })
}

function modificarstock() {
    console.log(arrayProducto[0]);
}

function venta_stock() {
    
}

function view_promedio() {

}

function view_producto_none() {

}



