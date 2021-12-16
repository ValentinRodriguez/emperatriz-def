import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cantidad = 0;
  constructor(private router: Router,
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

  doSearch(){
    this.router.navigateByUrl("/search");
  }

  irCarrito() {
    this.router.navigateByUrl("/home/tabs/tab3");
  }
}
