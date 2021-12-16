import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss'],
})
export class DetallePedidoComponent implements OnInit {

  @Input() pedido: any;
  total = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.pedido);    
  }

  calcularTotal(cart) {
    this.total = 0
    cart.forEach((element:any) => {
      this.total += element.sale_price;      
    });
    return this.total;
  }

}
