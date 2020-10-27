import  Producto from "./producto.js"

export default class Inventario{
    constructor(){
        this.inventario = new Array (20)
    }

    agregarProducto(productoNuevo, posicion){

        if( this.inventario[posicion] == null){

            this.inventario[posicion] = productoNuevo
            console.log("Este producto fue agregado con exito!!")

        } else {
            console.log("Lo sentimos, ese lugar ya está ocupado. Intente con uno nuevo :)")
        }

    }


}