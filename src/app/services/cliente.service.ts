import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaClientes } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  paginaPosts = 0;
  constructor(private http: HttpClient) { }
              
  getClientes(pull: boolean = false) {
    if (pull) {
      this.paginaPosts = 0;
    }    
    this.paginaPosts++;  
    return this.http.get<RespuestaClientes>(`${URL}/clientes?pagina=${this.paginaPosts++}`);
  }
              
  getClientesPorId( cliente: String ) {
    return this.http.get<RespuestaClientes>(`${URL}/clientes/${cliente}`);
  }

  crearCliente( clientes: any ) { 
    return this.http.post(`${ URL }/clientes`, clientes);
  }

  borrarCliente( cliente: String ) {
    return this.http.get<RespuestaClientes>(`${URL}/clientes/${cliente}`);
  }
}
