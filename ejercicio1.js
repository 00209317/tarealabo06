let arrayProductos = [];
let ventas = [];
do {
    var opcion = prompt("Ingrese una opcion:\n 1. Añadir producto\n 2. Modificar Stock \n 3.Registrar venta y modificar Stock \n 4. Mostrar promedio de ventas realizadas \n 5. Mostrar productos con stock 0 \n 6 Salir");
    switch (opcion) {
        case "1":
            let codigo = prompt("ingrese codigo del producto");
            let descrip = prompt("ingrese descripcion del producto");
            let tipo = prompt("ingrese tipo del producto");
            let precio_compra = prompt("ingrese precio de compra del producto");
            let precio_venta = prompt("ingrese precio de venta del producto");
            //let stock = prompt("ingrese stock del producto");
            addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock = 0);
            break;
        case "2":
            let id = prompt("Ingrese el id de producto a modificar");
            modifyStock(id);
            break;
        case "3":
            console.log(arrayProductos[0]);
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
alert("ADIOS, QUE TENGA UN LINDO DIA");

function addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock) {
    arrayProductos.push({ codigo, descrip, tipo, precio_compra, precio_venta, stock })
}

function modifyStock(id) {
    var newStock = parseInt(prompt('Inserte el nuevo Stock'), 10);
    var find = false;
    arrayProductos.forEach(e => {
        if (e.codigo == id) {
            e.stock = newStock;
            find = true;
        }
    });
    if (find)
        return console.log('Se modifico el stock del porducto seleccionado');
    else
        return console.log('Nose encontro el producto');

}

function venta_stock() {
    function venta_stock(id, cant_venta) {
        var newStock = 0;
        var find = false;
        arrayProductos.forEach(e => {
            if (e.codigo == id) {
                newStock = e.stock - cant_venta;
                find = true;
            }
        });
        if (find)
            return addventa(id, cant_venta, newStock);
        else
            return console.log('Nose encontro el producto');
    }
}

function view_promedio() {

}

function Stock0(){
    arrayProductos.forEach(e => {
        if(e.stock == 0){
           console.log(e.codigo);
           console.log(e.descrip);
           console.log(e.tipo);
           console.log(e.precio_compra);
           console.log(e.precio_venta);
           console.log(e.stock);
        }
    });
}

//Funcion demas, no la pide el ejercicio pero se considera necesaria
function addventa(codigo, ventas_realizada, ventas_restantes) {
    ventas.push({ codigo, ventas_realizada, ventas_restantes })
}


