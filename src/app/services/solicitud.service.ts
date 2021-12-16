import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({ 
  providedIn: 'root'
})
export class SolicitudService {

  nuevoPedido = new EventEmitter();
  paginaPosts = 0;
  constructor(private http: HttpClient) { }

  verificarEnlace(enlace: number){    
    return new Promise( resolve => {
      this.http.get(`${URL}/enlaces/?enlace=${enlace}`).subscribe((resp: any) =>{
        if (resp.enlace.length === 0) {
          resolve(false);            
        } else {
          resolve(true);
        }        
      })
    })  
  }
}