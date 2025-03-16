import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';



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

  onSubmit() {
    this.productoService.submitForm(
      this.productForm.value.code ?? '',
      this.productForm.value.productName ?? '',
      this.productForm.value.description ?? '',
      this.productForm.value.producer ?? '',
      this.productForm.value.date ?? ''
    );


    this.router.navigate(['/producto']);

  }

}
