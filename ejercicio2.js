let array = [];

function addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock) {
    array.push({ codigo, descrip, tipo, precio_compra, precio_venta, stock })
}

addproducto(2020, "Dulcito", "Dulce", 10, 15, 1);