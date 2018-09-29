let arrayProductos = [];

function addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock) {
    arrayProductos.push({ codigo, descrip, tipo, precio_compra, precio_venta, stock })
}

addproducto(2020, "gomitas ricas", "dulces", 10, 15, 6);
addproducto(2021, "chocobitos culeros", "dulces", 20, 35, 10);

function modify(lista, id){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].codigo == id){
            console.log(lista[i].stock);
        }
    }
}