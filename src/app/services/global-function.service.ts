import { Injectable,EventEmitter } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionService {

  formSubmitted = new EventEmitter();
  isLoading = false;

  detalleProducto = new BehaviorSubject<{}>({});
  getDetalleProducto = this.detalleProducto.asObservable();

  constructor(private loadingController: LoadingController) { }

  submit(state){    
    // if (state) {
    //   this.presentLoading();
    // }else{
    //   this.dismiss();
    // }
    this.formSubmitted.emit(state);
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Procesando...'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  detallesProducto(data){
    this.detalleProducto.next(data)
  }
  
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
}
