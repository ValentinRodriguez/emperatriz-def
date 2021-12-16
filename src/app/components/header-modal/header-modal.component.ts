import { Component, OnInit, ApplicationRef } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
})
export class HeaderModalComponent implements OnInit {
  
  cantidad = 0;
  
  constructor(private uiservice: UiServiceService,
    private router: Router,
    private cartService: CartService,
    private applicationRef: ApplicationRef) { }

  ngOnInit() {
    this.cartService.nuevoCarrito.subscribe( producto => { 
      this.cantidad += 1;
      this.applicationRef.tick();
    });

    this.cartService.productoCarritoBorrado.subscribe(() => {   
      this.cantidad -= 1;
      this.applicationRef.tick();
    });

    this.cartService.productoCarritoVaciado.subscribe(() => {
      this.cantidad = 0;
    });

    this.cartService.getCarrito().subscribe((resp: any)=>{
      this.cantidad = resp.data.length;      
    })
  }

  irCarrito() {
    this.router.navigateByUrl("/home/tabs/tab3");
  }

  regresar() {
    this.uiservice.regresar()
  }

}
