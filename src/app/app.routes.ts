import { Routes } from '@angular/router';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { AddProductComponent } from './pages/productos/producto/components/add-product/add-product.component';

export const routes: Routes = [

    {
        path: 'producto',
        component: ProductoComponent,
    },
    {
        path: 'add-product',
        component: AddProductComponent,
    },
    { path: '', redirectTo: '/producto', pathMatch: 'full' },

];
