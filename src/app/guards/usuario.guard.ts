import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad {
  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    this.usuarioService.validaToken().then(resp =>{
      if(!resp){
        this.navCtrl.navigateRoot('/login');     
        return resp;
      }
    })    
    return true;
  }
  
}
