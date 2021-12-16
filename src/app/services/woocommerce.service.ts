import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  // BUSCA TODOS LOS PRODUCTOS
  wooProducts(pull: boolean = false) {
    if (pull) {
      this.paginaPosts = 0;
    }

    this.paginaPosts++;
    return this.http.get(`${URL}/productos/?pagina=${this.paginaPosts}`);
  }

  wooProductsHome() {
    return this.http.get(`${URL}/home`);
  }

  wooProductsByCategory(id, pull: boolean = false) {
    if (pull) {
      this.paginaPosts = 0;
    }

    this.paginaPosts++;    
    return this.http.get(`${URL}/productos/categoria/${id}?pagina=${this.paginaPosts}`);
  }

  // BUSCAR PRODUCTO POR ID
  wooProduct(id: any) {
    return this.http.get(`${URL}/woocommerce/myproducts/${id}`);
  }

  // BUSCA TODOS LAS CATEGORIAS
  wooCategories() {
    return this.http.get(`${URL}/categorias`)
  }

  // BUSCA TIPO DE ENVIO ESPECIFICO
  wooTipoEnvio(id: number) {
    return new Promise( resolve => {
      return this.http.get(`${URL}/woo-shipping/myshipclass/${id}`).subscribe( resp => {
        if (resp['ok'] === true) {
          resolve(resp['data']);
        }
      });
    });
  }
}
