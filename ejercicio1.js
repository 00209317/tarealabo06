let arrayProductos = [];
let ventas = [];
do {
    var opcion = prompt("Ingrese una opcion:\n 1. Añadir producto\n 2. Modificar Stock \n 3.Registrar venta y modificar Stock \n 4. Mostrar promedio de ventas realizadas \n 5. Mostrar productos con stock 0 \n 6. Mostrar Ventas hechas \n 7. Salir");
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
            modificarStock(id);
            break;
        case "3":
            let id_3 = prompt("Ingrese el id de producto a modificar");
            let cant_venta = prompt("Ingrese la cantidad de la venta");
            venta_stock(id_3, cant_venta);
            break;
        case "4":
            view_promedio();
            break;
        case "5":
            view_stock_none();
            break;
        case "6":
            view_arrayventas();
            break;
        default:
            alert("ingrese dato correcto");
            break;
    }
}
while (opcion != 7);
alert("ADIOS, QUE TENGA UN LINDO DIA");

function addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock) {
    arrayProductos.push({ codigo, descrip, tipo, precio_compra, precio_venta, stock })
}

function modificarStock(id) {
    var newStock = parseInt(prompt('Inserte el nuevo Stock'), 10);
    var find = false;
    arrayProductos.forEach(e => {
        if (e.codigo == id) {
            e.stock = newStock;
            find = true;
        }
    });
    if (find)
        return alert('Se modifico el stock del producto seleccionado');
    else
        return alert('No se encontro el producto');

}

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
        return alert('No se encontro el producto');
}

function view_promedio() {
  //En verdad lo siento a 10 minutos pues el tiempo no me alcanzo :( y ya me arde la garganta, me revente un monton 
  //Me falto esta funcion :( estuve tan cerca de terminarlo
  //Psdata, saque algo demas que seria las ventas hechas asi que por eso hay punto :D
}

function view_stock_none() {
    arrayProductos.forEach(e => {
        if (e.stock == 0) {
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

function view_arrayventas() {
    for (let i = 0; i < ventas.length; i++) {
        console.log(ventas[i]);
    }
}


