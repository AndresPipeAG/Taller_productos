import { Injectable } from "@angular/core";
import { AddProductComponent } from "../components/add-product/add-product.component";


@Injectable({
    providedIn: 'root'
})

export class ProductoService {

    constructor() { }


    submitForm(code: string, productName: string, description: string, producer: string, date: string){
        console.log(`Codigo: ${code} - Nombre Producto: ${productName} - Descripcion: ${description} - Productor: ${producer} - Fecha Vencimiento: ${date}`);

    }

}