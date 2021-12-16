import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  forma: FormGroup;
  objCliente: any;
  pag = true;
  
  constructor(private uiService: UiServiceService,
              private clienteService: ClienteService) { }

  ngOnInit() {
    this.forma = new FormGroup({
      'first_name' : new FormControl('uiopioup', Validators.required),
      'last_name'  : new FormControl('uiopuiop', Validators.required),
      'city'       : new FormControl('dgdjghjfg', Validators.required),
      'address_1'     : new FormControl('ghj', Validators.required),
      'address_2'    : new FormControl('hjkhjk', Validators.required),
      'phone'      : new FormControl('456456456', Validators.required),
      'email'      : new FormControl('sdsfsdf'),
      'desc'       : new FormControl('sdfsdfsdfsdf')
    })
  }

  crearCliente() {
    if (this.forma.invalid) {
      this.uiService.alertaInformativa('Campos en blanco', 'Verifique que los campos NOMBRE, APELLIDO, TELEFONO Y DESCRIPCION no esten en blanco');
    } 
    else { 
      this.clienteService.crearCliente(this.forma.value).subscribe((resp: any) =>{          
        if (resp['ok']) {
          this.uiService.alertaInformativaCerrar("Completado","Cliente agregado correctamente");
        }       
      })     
    }    
  }

  updateSchedule() {
    this.pag = !this.pag;    
  }

}
