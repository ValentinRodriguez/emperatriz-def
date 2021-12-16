import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { RespuestaClientes } from '../../../interfaces/interfaces';
import { environment } from '../../../../environments/environment.prod';
import { PedidosService } from '../../../services/pedidos.service';
import { UiServiceService } from '../../../services/ui-service.service';

const margenGanancia = environment.margenGanancia;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
  envio = environment.costoEnvio
  cart = [];
  total = 0;
  freeShipping = 0
  clientes: any;
  cliente:any;

  constructor(public toastController: ToastController, 
              public alertController: AlertController,
              private cartServ: CartService,
              private uiService: UiServiceService,
              private clientesServ: ClienteService,
              private pedido: PedidosService,) {}
  
  ngOnInit(){
    this.cartServ.nuevoCarrito.subscribe( carrito => {
      this.cart.unshift( carrito );       
    });       
    this.miCarrito();
    this.misCLientes();
    // this.doTotalCalculation();

  }

  // METODO PARA SOLICITAR PEDIDOS POR USUARIO
  miCarrito() {
    this.cartServ.getCarrito().subscribe((resp: any) => {
      console.log(resp.data);
      
      if (resp['ok'] === true) {        
        this.cart = resp.data;    
        this.calculaTotal();
      }
    })  
  }
  
  misCLientes() {
    this.clientesServ.getClientes().subscribe((resp: RespuestaClientes) =>{
      console.log(resp);
      
      if (resp['ok'] === true) {
        this.clientes = resp.data;
      }
    })
  }

  calculaTotal() {
    this.total = this.envio;
    let miGanancia = 0;
    
    this.cart.forEach((element: any) => {      
      //CALCULAMOS SI ENVIO SALE GRATIS
      miGanancia += (element.quantity * (element.product_id.precio - element.product_id.precio_compra));      
      if (Number(miGanancia) <= Number(margenGanancia)) {   
        this.freeShipping = miGanancia / margenGanancia;   
        this.envio = 250;     
      }else{
        this.envio = 0;
      }

      // CALCULAMOS TOTALES
      const totalProducto = (Number(element.sale_price) * element.quantity);
      this.total += totalProducto;
    });   
  }

  lessQty(index){
    if(this.cart[index].quantity > 1){
      this.cart[index].quantity = this.cart[index].quantity-1;
      this.calculaTotal(); 
    }
  }

  addQty(index){ 
    const cantidasMas = this.cart[index].quantity + 1
    this.cart[index].quantity = cantidasMas;
    this.calculaTotal();
  }
     
  async borrarProductoCarrito(carrito: string) {    
    const alert = await this.alertController.create({
      header: 'Borrar producto',
      mode: "ios",
      message: '<strong>Esta seguro de eliminar este producto del carrito?</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return;
          }
        }, {
          text: 'Borrar',
          handler: () => {
            this.borrarProducto(carrito)
          }
        }]
    });
    await alert.present();
  }

  borrarProducto(carrito: string) {
    this.cartServ.borrarProductoCart(carrito).subscribe((resp)=>{
      if (resp['ok'] === true){
        this.miCarrito();    
        this.cartServ.productoCarritoBorrado.emit(null)            
      }     
    })
  }

  solicitarProducto() {  
    // this.presentLoading();
    if (this.cliente === undefined) {
      this.uiService.alertaInformativa('!!!ERROR!!!','Debe especificar el cliente.');
      return;
    } 

    if (this.cart.length === 0) {
      this.uiService.alertaInformativa("!!!ERROR!!!", "El carrito esta vacío");
      return;
    }
    
    const uid = this.cart.map((obj)=>{
      return {_id: obj.uid};
    })
    
    const pedido = {
      cliente: this.cliente,
      costoEnvio: this.envio,
      cart: uid
    }
    
    this.pedido.crearPedido(pedido).subscribe((resp: any)=>{  
      let orden = resp.data        
      if (resp['ok'] === true) {
        this.cart = [];
        this.cartServ.productoCarritoVaciado.emit(null);
        this.uiService.alertaInformativaCerrar(`PEDIDO ${orden.uid} REALIZADO`, "Comuniquese con el administrador para los detalles del envío");
      }
    });
  }

  async toastAlert(msg, index) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500
    });
    toast.present();
    this.cart.splice(index, 1);
    // this.doTotalCalculation(); 
  }

}
