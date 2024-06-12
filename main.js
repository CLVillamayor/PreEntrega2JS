//solicito nombre al usuario//


function solicitarNombre(){
    let nombreUsuario = prompt("Para un servicio personalizado por favor ingrese su nombre")
    alert("Hola "+ nombreUsuario );
}


//solicitarNombre();

//do{
    
    solicitarNombre();
    producto = prompt('qué deseas compar? A, :MENU, B, :CONO DE HELADO');
    switch(producto){
        case'A':
        producto = prompt('El menu es 1,:Pizza, 2,:Milanesa, 3,:Hamburguesa, ');
        cantidadMenu = parseInt(prompt('Ingrese la cantidad de menues a comprar'));
        switch(productoMenu){
            case'1':
            precio= 10000;
            break;
            case'2':
            precio = 5000;
            break;
            case'3':
            precio = 7000;
            break;
            case 'Empanada de Carne':
            precio = 1000;
            break;
            default:
                alert('Producto no disponible');
                cantidadMenu = 0
                break;
        }
        cantidadTotalMenuSelec = cantidadMenu;
        precioTotalMenSelec = precio*cantidadMenu ;
        if (cantidadMenu>=6) {
            
            alert('Tu compra tiene un descuento');
            descuentoPromo= precioTotalMenSelec * descuento;
            precioPromo=precioTotalMenSelec - descuentoPromo;
            alert('El total de tu compra es : $'+ precioPromo);
        } else {
            alert(nombreUsuario + ' has comprado ' + cantidadTotalMenuSelec+ ' de menu y el total a pagar es : $ ' +precioTotalMenSelec);
        } 
        break


        case'B':
        productoPostre =prompt('Los sabores de helado son Chocolate, Vainilla, Dulce de Leche, Frutilla') ;
        cantidadHelado = parseInt(prompt('Ingrese la cantidad de conos de helados a comprar'));
        switch(productoPostre){
            case'Chocolate':
            precio = 1000;
            break;
            case'Vainilla':
            precio = 1000;
            break;
            case'Dulce de Leche':
            precio = 1000;
            break;
            case'Frutilla':
            precio = 1000;
            break;
            default:
                alert('Producto no disponible');
                cantidad = 0
                break;
        
        }
        cantidadTotalHeladoSel = cantidadHelado;
        precioTotalHelSelec = precio*cantidadHelado ;
        alert(nombreUsuario + ' has comprado ' + cantidadTotalHeladoSel+ ' de cono/s de helado y el total a pagar es : $' +precioTotalHelSelec);
        
        break
    }





















//}

//const menu1= {
    //nombre: "Pizza",
    //precio: 10000,



//console.log(menu1.precio)
//console.log(menu1.nombre)

//const arrayM = [{id: 1,producto: "Pizza", precio: 10},{id: 2, producto: "Milanesa", precio: 20},{id:3, producto: "Hamburguesa", precio: 30}];
//for (cons producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);

//}