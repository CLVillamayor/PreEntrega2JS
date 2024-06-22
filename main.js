//Inicializacion de las variables a utilizar
let nombreUsuario = '';
let producto = '0';
let deseaSeguirComprando = false;
let cantidadMenu = '0';
let cantidadPostre = '0';
let precioTotalMenSelec = '0';
let precioTotalPostreSelec = '0';
let menuSeleccionado = '0';
let precioTotalMen = '0';
let postreSelecionado = '0';
let precioTotalPostre = '0';

//Array de menu 
const menu = [
{ id: 0,  nombre: "Pizza", precio: 10000 },
{ id: 1,  nombre: "Milanesa", precio: 5000 },
{ id: 2,  nombre: "Hamburguesa", precio: 7000 },
{ id: 3,  nombre: "Empanada de Carne", precio: 1000 }

];


//Array de Postres
const postre = [
{ id: 0,  nombre: "Chocolate", precio: 1000 },
{ id: 1,  nombre: "Vainilla", precio: 1000 },
{ id: 2,  nombre: "Dulce de Leche", precio: 1000 },
{ id: 3,  nombre: "Frutilla", precio: 1000 }
    
];




//Ejecución del programa

nombreUsuario = prompt('Para una atencion personalizada, por favor ingrese su nombre');

do{
    producto = prompt('Hola '  +   nombreUsuario,'qué deseas compar? A, :MENU, B, :POSTRE CONO DE HELADO');
    switch(producto){
        case'A':
        alert ("Por favor toca OK para ver nuestra lista de productos " ) 
        alert (JSON.stringify(menu));
        const index = prompt('Ingresa el índice de la comida que deseas visualizar (0, 1 , 2 o 3 ):');
        const menuSelecionado = menu[parseInt(index)];

        if (menuSelecionado) {
        alert("El menu seleccionado es")
        alert (JSON.stringify(menuSelecionado));
        } else {
        alert('Índice inválido. Por favor, ingresa un índice válido (0, 1 , 2 o 3).');
        }

        cantidadMenu = parseInt(prompt('Ingrese la cantidad de menues a comprar'));
        let precioTotalMen = 0;
        menu.forEach(menu => {
         precioTotalMenSelec = menuSelecionado.precio * cantidadMenu;
        });

        alert("El precio total de comprar " + cantidadMenu +" comida/s es" + " $ " + precioTotalMenSelec );
        break;

        case'B':
        
        alert ("Por favor toca OK para ver nuestra lista de productos " ) 
        alert (JSON.stringify(postre));
        const indexP = prompt('Ingresa el índice del sabor que deseas visualizar (0, 1 , 2 o 3 ):');
        const postreSelecionado = postre[parseInt(indexP)];

        if (postreSelecionado) {
            alert("El sabor de cono de helado seleccionado es")
            alert (JSON.stringify(postreSelecionado));
            } else {
            alert('Índice inválido. Por favor, ingresa un índice válido (0, 1 , 2 o 3).');
            }
        cantidadPostre = parseInt(prompt('Ingrese la cantidad de conos de helado a comprar'));

        let precioTotalPostre = 0;
        postre.forEach(postre => {
        precioTotalPostreSelec = postreSelecionado.precio * cantidadPostre;
        });
        alert("El precio total de comprar " + cantidadPostre +" cono/s de helado es" + " $ " + precioTotalPostreSelec );

        break;
    }

    CantidadTotaldeProductos = cantidadMenu + cantidadPostre ;
    precioTotal = precioTotalMenSelec + precioTotalPostreSelec ;

    deseaSeguirComprando = confirm('Desea seguir comprando?');

    if (cantidadPostre==0){
        CantidadTotaldeProductos= cantidadMenu
        precioTotal= precioTotalMenSelec
    }
    if (cantidadMenu==0){
        CantidadTotaldeProductos= cantidadPostre
        precioTotal= precioTotalPostreSelec
    }

    

}while(deseaSeguirComprando)
    alert(nombreUsuario + ' tu compra ha sido exitosa, has comprado ' + CantidadTotaldeProductos + ' productos y el total a pagar es : $' + precioTotal);



