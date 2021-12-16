import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { RespuestaLogin } from 'src/app/interfaces/interfaces';
import { GlobalFunctionService } from 'src/app/services/global-function.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  form: FormGroup;
  isTypePassword: boolean = true;
  loading = false;

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private global: GlobalFunctionService) {
    this.initForm();
  }
ngOnInit() {
  this.global.formSubmitted.subscribe((resp: any) =>{
    this.loading = resp;      
  });
}

initForm() {
  this.form = new FormGroup({
    correo: new FormControl('rosvd@sdf.com', 
      {validators: [Validators.required, Validators.email]}
    ),
    password: new FormControl('123456', 
      {validators: [Validators.required, Validators.minLength(6)]}
    ),
  });
}

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    if(!this.form.valid) return;
    console.log(this.form.value);
    this.usuarioService.login(this.form.value).subscribe((resp: RespuestaLogin) =>{ 
      this.usuarioService.setUsuario(resp.usuario)
      this.usuarioService.guardarToken(resp.token)
      this.navCtrl.navigateRoot('/home/tabs/tab1', {animated: true});         
    });
  }

}
