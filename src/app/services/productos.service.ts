import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaProductos } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { UiServiceService } from './ui-service.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  paginaPosts = 0;
  
  constructor(private http: HttpClient,
              private uiService: UiServiceService) { }
  
  getProductos(pull: boolean = false ) {
    if (pull) {
      this.paginaPosts = 0;
    }    
    this.paginaPosts++;
    return this.http.get<RespuestaProductos>(`${URL}/productos-seleccionados/?pagina=${this.paginaPosts}`);
  }

  crearProducto( producto: any) {    
    return new Promise( resolve => {
      this.http.post(`${ URL }/productos-seleccionados`, producto)
        .subscribe( (resp: any) => {            
          if (resp.code === false) {
            this.uiService.alertaInformativa("Producto duplicado", "Este producto ya estaba en su catalogo")
          } else {
            resolve(true);            
            this.uiService.alertaInformativa("Producto agregado","Producto Agregado a su catalogo")
          }                
        });
    });
  }
  
  borrarProducto( producto ) {
    return new Promise( resolve => {
      this.http.delete(`${ URL }/productos-seleccionados/${producto}`)      
      .subscribe( resp => {                   
        if (resp['ok']) {
          resolve(resp);            
        }
      });
    });
  }

}
