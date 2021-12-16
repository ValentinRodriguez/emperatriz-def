import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform( arreglo: any[], texto: string, columna: string, columna2 = "" ): any[] {
    if ( texto === '' || texto === undefined) {
      return arreglo;
    }    
    return arreglo.filter( item => {   
      if (columna2 !== "") {        
        return item[columna2][columna].toLowerCase().includes( texto );        
      }          
      return item[columna].toLowerCase().includes( texto );        
    });
  }
}
