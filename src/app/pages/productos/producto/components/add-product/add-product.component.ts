import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';



@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  productoService = inject(ProductoService);
  router = inject(Router);

  productForm = new FormGroup({
    code: new FormControl(''),
    productName: new FormControl(''),
    description: new FormControl(''),
    producer: new FormControl(''),
    date: new FormControl('')
  });

  products = new FormArray([]);

  onSubmit() {
    let producto: Producto = {
      code: this.productForm.value.code ?? '',
      productName: this.productForm.value.productName ?? '',
      description: this.productForm.value.description ?? '',
      producer: this.productForm.value.producer ?? '',
      date: this.productForm.value.date ?? ''
    };

    this.productoService.addProducto(producto);


    this.router.navigate(['/producto']);

  }

}
