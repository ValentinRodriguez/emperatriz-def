import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PinGuard implements CanLoad {

  constructor(private alertController: AlertController,
              private usuarioService: UsuarioService) {}
  
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.presentAlertPrompt();
  }
  
  async presentAlertPrompt() {
    
    let permitido = false
    let usuario: Usuario;

    const alert = await this.alertController.create({
      header: 'Ingrese PIN',
      inputs: [
        {
          name: 'pin',
          type: 'password',
          id: 'password'
        }
      ],
      buttons: [{
          text: 'Autenticar',
          handler: (e) => {
            const pin = this.usuarioService.getUsuario()            
            if (pin === e.pin) {
              permitido = true             
            }
          }
        }
      ]
    });
    await alert.present();
    return permitido;

  }
}
