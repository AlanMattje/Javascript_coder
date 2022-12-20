class Menu {

    constructor(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    }

    get_datos(){
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio); 
        console.log("Stock: ", this.stock);     
        console.log("");
    }

    get_stock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }
    
    update_stock(cantidad){
        if (this.stock >= cantidad){
            this.stock=this.stock -cantidad;
        }
        else{
            console.log("No contamos con suficiente stock en este momento")
        }
    }
}

let lista_menu = [];

for(let i = 0 ; i < 3 ; i = i + 1){
    let nombre = prompt("Ingrese clase de comida");
    let precio = prompt("Ingrese el precio de la comida");
    let stock = prompt("Ingrese el stock listo para vender en una noche");

    let menu = new Menu( nombre , precio , stock);
    lista_menu.push(menu);
}

for( let menu of lista_menu){
    menu.get_datos();
}

function buscar_Menu( Menu ){
    return Menu.nombre == compra_cliente
}

let compra_cliente = prompt("Ingrese la comida que desea comprar");

let final_find = lista_menu.find(buscar_Menu);

if(final_find != undefined){
    if(final_find.get_stock()){
        let unidades = prompt("¿Cuantas unidades desea comprar?");
        final_find.update_stock(unidades);
        console.log("Gracias por su compra, Buen provecho")
        }
    else{
        console.log("No tenemos stock del plato");
    }
}
else{
    console.log("No realizamos esa comida")
}
final_find.get_datos();