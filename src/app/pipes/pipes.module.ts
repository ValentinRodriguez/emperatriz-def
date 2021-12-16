import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { InvProductosPipe } from './inv-productos.pipe';

@NgModule({
  declarations: [
    FiltroPipe,
    DomSanitizerPipe,
    InvProductosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroPipe,   
    DomSanitizerPipe,
    InvProductosPipe
  ]
})
export class PipesModule { }
