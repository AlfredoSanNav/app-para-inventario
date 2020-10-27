import  Producto from "./producto.js"

export default class Inventario{
    constructor(){
        this.inventario = new Array (20)
    }

    agregarProducto(productoNuevo, posicion){

        if( (this.inventario[posicion]) == null){

            this.inventario[posicion] = productoNuevo
            console.log("Este producto fue agregado con exito!!")

        } else {
            console.log("Lo sentimos, ese lugar ya está ocupado. Intente con uno nuevo :)")
        }

    }

    borrarCodigo(codigo){
        for(let i = 0; i < 20; i++){

            if(this.inventario[i] == null){
                
            } else if(this.inventario[i].codigo == codigo){

                this.inventario[i] = null
                console.log("El producto fue eliminado con exito!!")
                break
                
            }
            

        }
    }


}