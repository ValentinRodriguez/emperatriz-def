import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModalComponent } from "./header-modal/header-modal.component";
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PipesModule } from '../pipes/pipes.module';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
    HeaderModalComponent,
    HeaderPageComponent,
    HeaderComponent,
    ListadoClientesComponent,
    DetallePedidoComponent
  ],
  exports:[
    HeaderModalComponent,
    HeaderPageComponent,
    HeaderComponent,
    ListadoClientesComponent,
    DetallePedidoComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatExpansionModule,
    IonicModule
  ]
})
export class ComponentsModule { }
