import { Component, Input, OnInit } from "@angular/core";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { WoocommerceService } from '../../services/woocommerce.service';
import { SingleProductViewPage } from '../single-product-view/single-product-view.page';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.page.html",
  styleUrls: ["./product-list.page.scss"],
})
export class ProductListPage implements OnInit {

  @Input() categoria: any;
  productos = [];
  habilitado = true;
  textBuscar = '';
  
  constructor(public actionSheetController: ActionSheetController,
              private productosServ: WoocommerceService,
              private modalCtrl: ModalController) {}

  categoryTitle = "Fashion";

  ngOnInit() {
    console.log(this.categoria);
    this.siguientes(this.categoria, true)
  }

  async detalleProducto(product) {
    const modal = await this.modalCtrl.create({
      component: SingleProductViewPage,
      componentProps: { product }
    });
    modal.present();
  }

  async doFilter() {
    const actionSheet = await this.actionSheetController.create({
      header: "Sort by",
      buttons: [
        {
          text: "Featured Products",
          icon: "funnel-outline",
          handler: () => {
            console.log("Sort by: Featured");
          },
        },
        {
          text: "Price High to Low",
          icon: "trending-down-outline",
          handler: () => {
            console.log("Sort by: Price High to Low");
          },
        },
        {
          text: "Price Low to High",
          icon: "trending-up-outline",
          handler: () => {
            console.log("Sort by: Price Low to High");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancelled");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  buscarProducto( cliente ) {    
    return this.textBuscar = cliente.detail.value;
  }

  siguientes(id:string, pull:boolean = false, event?: any) {    
    this.productosServ.wooProductsByCategory(id,pull).subscribe((resp: any)=>{
      console.log(resp);      
      if (resp.data.length !== 0 && resp['ok']) {
        this.productos.push(...resp.data);  
        console.log(this.productos);
              
      }

      if (event) {
        event.target.complete();
        if (this.productos.length === 0) {
          this.habilitado = false;
        }
      }  
    })
  }
}
