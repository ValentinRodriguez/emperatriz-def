import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor( private http: HttpClient,
              //  private storage: Storage,
               private navCtrl: NavController ) { }

  login( data:any ) {
    return this.http.post(`${ URL }/auth/login`, data )
  }
   
  logout() {
    localStorage.remove('token');
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  getUsuario() { 
    let usuario =  localStorage.getItem('usuario') || null
    return usuario;
  }

  setUsuario(usuario: any) { 
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  async guardarToken( token: string ) {
    localStorage.setItem('token', token);
  }

  cargarToken() {
    const token = localStorage.getItem('token') || null;       
    return  token;
  }

  async validaToken(): Promise<boolean> {
    const token = this.cargarToken();
    if ( !token ) {      
      return Promise.resolve(false);
    }
    return true;

    // return new Promise<boolean>( resolve => {
    //   this.http.get(`${ URL }/user/`)
    //     .subscribe( resp => {
    //       if ( resp['ok'] ) {
    //         this.usuario = resp['usuario'];
    //         resolve(true);
    //       } else {
    //         this.navCtrl.navigateRoot('/login');
    //         resolve(false);
    //       }
    //     });
    // });
  }

  actualizarUsuario( usuario: Usuario ) {
    return new Promise<boolean>( resolve => {
      this.http.post(`${ URL }/user/update`, usuario).subscribe( resp => {          
          if ( resp['ok'] ) {
            this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  } 

  recuerdaPassword(data: any) {
    let datos = JSON.stringify(data)
    // this.storage.set('recuerdame',datos)
  }

  async pidePassword(){
    // let datos = await this.storage.get('recuerdame');
    // return JSON.parse(datos) || null;
  }
}
