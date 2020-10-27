export default class Producto{
    constructor(codigo, nombre, descripcion, costo, cantidad){
        this.codigo = codigo
        this.nombre = nombre
        this.descripcion = descripcion
        this.costo = costo 
        this.cantidad = cantidad
    }

    descripcion(){
        return `${this.codigo}, ${this.nombre}, ${this.descripcion}, $${this.costo}, ${this.cantidad} piezas.`
    }

}