import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-producto',
  imports: [RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}
