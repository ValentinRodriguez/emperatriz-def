import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosService } from "./productos.service";
import { WoocommerceService } from "./woocommerce.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProductosService,
    WoocommerceService
  ]
})
export class ServicesModule { }
