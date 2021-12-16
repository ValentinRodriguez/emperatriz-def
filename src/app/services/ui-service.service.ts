import { Injectable } from '@angular/core';
import { AlertController, ToastController, ModalController, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  isLoading: boolean;

  constructor( private alertController: AlertController,
               private toastController: ToastController,
               private modalCtrl: ModalController,
               public loadingController: LoadingController,
               private location: Location ) { }


  async alertaInformativa(header: string, message: string ) {
    const alert = await this.alertController.create({
      header,
      message,
      // mode: 'ios',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaInformativaCerrar(header: string, message: string ) {
    const alert = await this.alertController.create({
      header,
      message,
      mode: 'ios',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: () => {
            // this.regresar();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast( message: string ) {
    const toast = await this.toastController.create({
      message,
      color: 'primary',
      position: 'bottom',
      duration: 1000,
      buttons: [
         {
          text: 'OK',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  async presentToastError( message: string ) {
    const toast = await this.toastController.create({
      message,
      color: 'dark',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  async presentLoading(message) {
    this.isLoading = true;
    return await this.loadingController.create({
      message,
      // duration: 5000,
    })
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  regresarPagina() {
    this.location.back();
  }

}
