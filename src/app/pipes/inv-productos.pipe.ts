import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
const URL = environment.urlImagen;
@Pipe({
  name: 'invProductos'
})
export class InvProductosPipe implements PipeTransform {
  transform(img: any): any {         
    if (img === null || img === '' || img == '[]') {
      return "../assets/empty-image.png";
    }else{         
      return `${URL}/${img}`;
    }
  }
}
