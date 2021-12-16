import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaCarrito, Carrito } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  paginaPosts = 0;
  nuevoCarrito = new EventEmitter<Carrito>();
  carritoVaciado = new EventEmitter();
  productoCarritoBorrado = new EventEmitter<Carrito>();
  productoCarritoVaciado = new EventEmitter<Carrito>();
  
  constructor(private http: HttpClient, 
              private usuarioService: UsuarioService) { }

  //************************************//
  //******CONSEGUIMOS LOS PEDIDOS*******//
  //************************************//              
  getCarrito() {
    return this.http.get<RespuestaCarrito>(`${URL}/carrito`);
  }

  //************************************//
  //******HACEMOS LOS PEDIDOS***********//
  //************************************//  
  crearCarrito( carrito: any ) {          
    return this.http.post(`${ URL }/carrito`, carrito);       
  }

  borrarProductoCart( id: string ) {    
    return this.http.delete(`${ URL }/carrito/${id}`);
  }

  vaciarCarrito( data: any ) {    
    return this.http.put(`${ URL }/carrito/massive`, data);
  }
}
