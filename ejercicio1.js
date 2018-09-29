do {
    var opcion = prompt("Ingrese una opcion:\n 1. Añadir producto\n 2. Modificar Stock \n 3.Registrar venta y modificar Stock \n 4. Mostrar pro,edio de ventas realizadas \n 5. Mostrar productos con stock 0 \n 6 Salir");
    switch (opcion) {
        case "1":
            var produc = new Producto();
            produc.addproducto();
            break;
        case "2":

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

class Producto {
    constructor(){
        
    }
    constructor(codigo, descrip_produc, tipo, precio_compra, precio_venta, stock) {
        this.codigo = codigo;
        this.descrip_produc = descrip_produc;
        this.tipo = tipo;
        this.precio_compra = precio_compra;
        this.precio_venta = precio_venta;
        this.stock = stock;
    }

    addproducto() {

    }

    modificarstock() {

    }

    venta_stock() {

    }

    view_promedio() {

    }

    view_producto_none() {

    }
}

