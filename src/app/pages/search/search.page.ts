import { Component, OnInit } from '@angular/core';
import { RespuestaProductos } from 'src/app/interfaces/interfaces';
import { WoocommerceService } from 'src/app/services/woocommerce.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  productos: any = [];
  textBuscar = '';

  constructor(private productosServ: WoocommerceService) { }

  ngOnInit() {
    this.productosServ.wooProducts().subscribe((resp: RespuestaProductos) =>{      
      if (resp.ok) {
        this.productos = resp.data
        console.log(this.productos);        
      }
    })
  }

  buscarProducto( cliente ) {    
    return this.textBuscar = cliente.detail.value;
  }

  
}
