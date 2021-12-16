import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaPedidos, Pedidos } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  paginaPosts = 0;
  nuevoPedido = new EventEmitter<Pedidos>();
  pedidoBorrado = new EventEmitter<Pedidos>();
  pedidoActualizado = new EventEmitter<Pedidos>();

  chosen = false;
  isLoading = false;
  solicitados = [];
  objPedido: any;
  productosEscogidos = [];

  constructor(private http: HttpClient) { }

  buscarPedidos( pull: boolean = false) {
    if (pull) {
      this.paginaPosts = 0;
    }
    
    this.paginaPosts++;  
    return this.http.get<RespuestaPedidos>(`${URL}/pedidos?pagina=${this.paginaPosts++}`);
  }

  pedidosCompletados() { 
    return this.http.get<RespuestaPedidos>(`${URL}/pedidos/completados`);
  }

  crearPedido( pedidos: any ) {        
    return this.http.post(`${ URL }/pedidos`, pedidos);
  }

  actualizarPedido( pedidos: any ) {
    return new Promise( resolve => {
      this.http.put(`${ URL }/pedidos/${pedidos.id}`, pedidos)
          .subscribe( resp => {                     
            if (resp['ok'] === true) {
              this.pedidoActualizado.emit( resp['pedidos'] );
              resolve(true);            
            }
          });
    });
  }

  borrarPedido( pedidos: Pedidos ) {
    return this.http.delete(`${ URL }/pedidos/${pedidos}`) 
  }

}
