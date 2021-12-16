import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleProductViewPageRoutingModule } from './single-product-view-routing.module';

import { SingleProductViewPage } from './single-product-view.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    PipesModule,
    IonicModule,
    SingleProductViewPageRoutingModule,
    TranslateModule
  ],
  declarations: [SingleProductViewPage]
})
export class SingleProductViewPageModule {}
