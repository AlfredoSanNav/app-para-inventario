import Inventario from "./inventario.js"
import Producto from "./producto.js"

class Main{
    constructor(){

    }

    testAgregarProducto(){
        let producto01 = new Producto(1001, "Coca-cola", "Refresco Coca-cola de 2.5L", 28, 12)
        let producto02 = new Producto(1002, "Cheetos", "Bolsa de cheetos de 45 gr", 17, 24)
        let inventario01 = new Inventario()

        inventario01.agregarProducto(producto01, 5)
        inventario01.borrarCodigo(1001)
        inventario01.agregarProducto(producto02, 5)
        inventario01.agregarProducto(producto01, 3)
        inventario01.listar()
    }
}

let app = new Main()
app.testAgregarProducto()