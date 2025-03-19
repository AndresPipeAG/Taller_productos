import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from './services/producto.service';
import { Producto } from './interfaces/producto';

@Component({
  selector: 'app-producto',
  imports: [RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  productos : Producto[] = [];
  constructor (productoService: ProductoService) {
    this.productos = productoService.getProductos();

  }

}
