import { Injectable } from '@angular/core';
import { ActionSheetController, ToastController, 
         Platform, AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ProductosService } from './productos.service';
import { UiServiceService } from './ui-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuOptionService {

  enMisProductos: boolean;
  
  constructor(private actionSheetController: ActionSheetController,
              private toastController: ToastController,
              private socialSharing: SocialSharing,
              private productosService: ProductosService,
              private uiservice: UiServiceService,
              private alertController: AlertController,
              private platform: Platform,
              private router: Router) { }

  async lanzarMenu(data: any, site: string) {
    
    let btnProducto;
    let btnCarrito;

    if (site === 'origen') {
      btnCarrito = {
        text: 'Ver Producto',
        icon: 'eye',
        cssClass: 'action-dark',
          handler: () => {
            this.verDetalle(data);
          }
      }
    } else {
      btnCarrito = {
        text: 'Agregar al Carrito',
        icon: 'cart',
        cssClass: 'action-dark',
          handler: () => {
            
          }
      }
    }
    
    if (site === 'mis_productos') {
      btnProducto = {
        text: 'Borrar de mis productos',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.favMessage('Eliminado de Favoritos.');
          this.productosService.borrarProducto(data.id); 
        }
      };
    } else {
      btnProducto = {
        text: 'Agregar a mis productos',
        icon: 'pricetag',
        cssClass: 'action-dark',
          handler: () => {
            // if (site === "origen") {
            //   this.miPrecio(data, idUsuario);                     
            // }else{
            // }
            this.productosService.crearProducto(data);
          }
      };
    }

    const actionSheet = await this.actionSheetController.create({
      buttons: [
      btnProducto,  
      btnCarrito,
      {
        text: 'Cancelar',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
          handler: () => {
          }
      }]
    });
    await actionSheet.present();
  }

  async miPrecio(data: any, idUsuario: any) {
    const alert = await this.alertController.create({
      header: 'Coloque Precio',
      inputs: [
        {
          name: 'price',
          type: 'text',
          id: 'name2-id'
        }
      ],
      buttons: [{
          text: 'Ok',
          handler: (value) => {  
            if (value.price === "") {
              this.uiservice.alertaInformativa("ATENCION","Debes colocar un precio de venta")
              return;
            }
            if (Number(value.price) < data.price || Number(value.price) === data.price) {
              this.uiservice.alertaInformativa("ATENCION","Coloca un precio mayor al que te cuesta el producto")
              return;
            }
            
            data.price = Number(value.price)
            this.productosService.crearProducto(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async favMessage(flag: string) {
    const toast = await this.toastController.create({
      message: flag,
      duration: 2000
    });
    toast.present();
  }

  async verDetalle(data: any) {
    this.router.navigate(['/detalle', data.id])
    this.uiservice.regresar();
  }

  compartir(title,files,plataforma) {
    if (this.platform.is('cordova')) {
      console.log('es cordova');     
      this.socialSharing[plataforma](title,files).then(() => {          
        this.uiservice.presentToast('!!!Información compartida correctamente!!!.');
      }).catch((error) => {
        this.uiservice.presentToast(error);
        console.log(error)
      });      
    }else{
      console.log('PLATAFORMA NO SOPORTADA');        
    }
  }  
}
   // if (navigator['share'] ) {
    //   let shareData = null
    //   if (file) {
    //     shareData = {
    //       title: titulo,
    //       text: texto,
    //       url: url,
    //       files: file
    //     }        
    //   }else{
    //     shareData = {
    //       title: titulo,
    //       text: texto,
    //       url: url
    //     }  
    //   }
    //   console.log(file);      
    //   navigator['share'](shareData);
    //   console.log('navigator');      
    // } else {
    //   console.log('cordova');
    //   this.socialSharing.share(titulo,'prueba subject',file)
    //   .then(() => {
    //     console.log('Success!');              
    //   }).catch((error) => {
    //     console.log(error);              
    //     console.log('PLATAFORMA NO SOPORTADA');        
    //   });
    // }