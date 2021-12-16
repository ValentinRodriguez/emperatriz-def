import { ApplicationRef, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {
  
  cantidad = 0;

  constructor(private UiServiceService: UiServiceService,
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

  regresar(){
    this.UiServiceService.regresarPagina()
  }
}
