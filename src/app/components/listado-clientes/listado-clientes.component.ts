import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController, AlertController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss'],
})
export class ListadoClientesComponent implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;

  refrescador = 'pedidos';
  clientes: any = [];
  habilitado = true;
  usuario: any;
  textBuscar = '';
  objPedido: any;
  existe = false;
  src = 'assets/loading.gif';

  constructor(private clientesServ: ClienteService,
              private modalCtrl: ModalController,
              private usuarioService: UsuarioService,
              // private menuOption: MenuOptionService,
              private alertController: AlertController) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario(); 
    this.misClientes(true); 
  }

  // COMPARTIMOS UN PEDIDO  
  // share(cliente: Clientes) {
  //   this.menuOption.avisoPedido(cliente.first_name, cliente.first_name);
  //   this.lista.closeSlidingItems();
  // }

  async borrarCliente(cliente: any, data?: string) {    
      let cabecera = 'Borrar cliente';
      let mensaje = '<strong>Esta seguro de eliminar este cliente?</strong>!!!';
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
              this.borrar(cliente);                
            }
          }]
    });

    await alert.present();
  }

  // BORRAMOS UN PEDIDO 
  borrar(cliente) {     
    this.clientesServ.borrarCliente(cliente).subscribe( (resp: any) =>{ 
      if (resp['ok']) {
        this.misClientes();
      }
    });
  }

  // REFRESCAMOS LA PAGINA DE PEDIDOS
  doRefresh(event: any) {
    this.clientes = []
    this.existe = false;
    this.misClientes(true,event);
    this.habilitado = true;
  }

  // SOLICITAMOS LOS DATOS MAS RECIENTES DE clientes DE MANERA PAGINADA 
  misClientes(pull:boolean = false,event?: any) {    
    this.clientesServ.getClientes(pull).subscribe((resp: any) => {
      if (resp.data.length !== 0 && resp['ok']) {
        this.clientes.push(...resp.data);        
      }

      if (event) {
        event.target.complete();
        if (this.clientes.length === 0) {
          this.habilitado = false;
        }
      }
    });  
  }

  // ACTUALIZAMOS UN PEDIDO
  // async actualizarCliente(data: any, pagina: string) {    
  //   const modal = await this.modalCtrl.create({
  //     component: ClienteComponent,
  //     componentProps: {
  //       data,pagina
  //     }
  //   });
  //   modal.present();
  // }

  // async detallesPedidos(data: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: DetallesPedidosComponent,
  //     componentProps: {
  //       data
  //     }
  //   });
  //   return await modal.present();
  // }

  // METODO PARA BUSCAR PEDIDO POR NOMBRE DEL CLIENTE
  buscarPedido( cliente ) {    
    return this.textBuscar = cliente.detail.value;
  }

  formatPhoneNumber(phoneNUmber, clientes)  {
    //Filter only numbers from the input
    let cleaned = ('' + phoneNUmber).replace(/\D/g, '');
    
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '('+ match[1]+')'+match[2]+'-'+ match[3];
    }
  
    return clientes.phone_number;
  }

}
