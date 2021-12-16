import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PedidosService } from '../../../services/pedidos.service';
import { DetallePedidoComponent } from '../../../components/detalle-pedido/detalle-pedido.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  refrescador = 'pedidos';
  pedidos: any = [];
  habilitado = true;
  usuario: any;
  textBuscar = '';

  constructor(private pedidosServ: PedidosService,
              private modalCtrl: ModalController,
              private alertController: AlertController,) {}
  
  ngOnInit(): void {
    this.misPedidos(); 
  }

  async borrarPedido(pedido: any, data?: string) {    
    let cabecera = 'Borrar pedido';
    let mensaje = '<strong>Esta seguro de eliminar este pedido?</strong>!!!';
    let boton= 'Borrar';

    const alert = await this.alertController.create({
      header: cabecera,
      mode: "ios",
      message: mensaje,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return;
          }
        }, {
          text: boton,
          handler: () => {
            this.borrar(pedido);                
          }
        }]
    });

    await alert.present();
  }

  // BORRAMOS UN PEDIDO 
  borrar(pedido) {    
    this.pedidosServ.borrarPedido(pedido).subscribe( (resp: any) =>{ 
      if (resp['ok']) {
        this.misPedidos();
      }
    });
  }
  
  // REFRESCAMOS LA PAGINA DE PEDIDOS
  doRefresh(event: any) {
    this.pedidos = []
    this.habilitado = true;
    this.misPedidos(event,true);
  }

  // SOLICITAMOS LOS DATOS MAS RECIENTES DE PEDIDOS DE MANERA PAGINADA 
  misPedidos(event?: any, pull:boolean = false) {    
    this.pedidosServ.buscarPedidos(pull).subscribe((resp: any) => {       
      console.log(resp.data);
         
      if (resp['ok'] === true && resp['data'].length !== 0) {
        this.pedidos.push(...resp.data);   
      }

      if (event) {
        event.target.complete();
        if (this.pedidos.length === 0) {
          this.habilitado = false;
        }
      }
    });  
  }

  // METODO PARA BUSCAR PEDIDO POR NOMBRE DEL CLIENTE
  buscarPedido( cliente ) {    
    return this.textBuscar = cliente.detail.value;
  }

  calcularTotal(cart) {
    let total = 0
    cart.forEach((element:any) => {
      total += element.sale_price;      
    });
    return total;
  }
  
  async detallePedido(pedido){
    const modal = await this.modalCtrl.create({
      component: DetallePedidoComponent,
      componentProps: {
        pedido
      }
    });
    modal.present();
  }
}
