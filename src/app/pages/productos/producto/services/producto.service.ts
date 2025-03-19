import { Injectable } from "@angular/core";
import { AddProductComponent } from "../components/add-product/add-product.component";
import { Producto } from "../interfaces/producto";


@Injectable({
    providedIn: 'root'
})

export class ProductoService {

    productos: Producto[] = [];

    constructor() { }

    // submitForm(code: string, productName: string, description: string, producer: string, date: string){
    //     console.log(`Codigo: ${code} - Nombre Producto: ${productName} - Descripcion: ${description} - Productor: ${producer} - Fecha Vencimiento: ${date}`);
    // }

    addProducto(producto: Producto){
        this.productos.push(producto);
    }

    getProductos(){
        return this.productos;
    }

}