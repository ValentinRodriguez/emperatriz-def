import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.page.html',
  styleUrls: ['./single-product-view.page.scss'],
})
export class SingleProductViewPage implements OnInit {

  @Input() product: any;

  data = null;
  seller: string;
  model: string;
  cargando = false;
  cliente: any;

  chosen = true;
  objPedido: any;
  solicitados = [];
  productosEscogidos: any;
  maxDiscount = 0;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };
  relatedProducts = []
  detalles = {
    img_poster: null,
    precio_venta: null,
    mi_precio: null,
    descuento: 0,
    ganancia: null,
    disponibilidad: null,
    codigo: null,
    entrega: null,
    descHtml: null,
  }

  constructor(private uiService: UiServiceService,
              private activeRoute: ActivatedRoute,
              private usuario: UsuarioService,
              private carrito: CartService,
              // private clipboard: Clipboard,
                  ) {}

  ngOnInit() {  
    this.data = this.activeRoute.snapshot.paramMap.get('data');
    this.seller = this.activeRoute.snapshot.paramMap.get('seller');
    this.cliente = this.usuario.getUsuario();
    this.detalleArticulo(this.product);
    console.log(this.product);
    
  }

  copiaCodigo(codigo){
    // this.clipboard.copy(codigo);
    console.log(codigo);    
  }

  changeImage(modelo: any, i: number) {
    const id = modelo.id;  
    document.getElementById(id).classList.add('chosen');
    this.detalles.img_poster = modelo.src;
  }

  detalleArticulo(data) {
    this.detalles.img_poster = data.img;

    // PRECIO DE VENTA
    this.detalles.precio_venta = Math.round(data.precio);

    // GANANCIA
    const ganancia = ((data.precio * Number(data.ganancia)) / 100);
    this.detalles.ganancia = Math.round(ganancia);
    this.maxDiscount = this.detalles.ganancia;

    //MI PRECIO VENTA MINIMO
    this.detalles.mi_precio = this.detalles.precio_venta - this.detalles.ganancia

    // CANTIDAD DISPONIBLE
    this.detalles.disponibilidad = data.stock_quantity
    
    // CODIGO
    this.detalles.codigo = data.uid;

    // DESCRIPCION
    this.detalles.descHtml = data.descripcion;

    // CANTIDAD DISPONIBLE
    if (data.envios === undefined || data.envios === null) {
      this.detalles.entrega = 'No especificado';
    } else {
      this.detalles.entrega = data.envios.descripcion;
    }
  }

  agregarAlCarrito() {  
      const data = {
        shipping_id: this.product.envios._id,
        product_id: this.product.uid,
        sale_price: this.detalles.mi_precio + (this.detalles.ganancia - this.detalles.descuento)
      }
      
      this.carrito.crearCarrito(data).subscribe( resp => {      
        if (resp['ok'] === true) {
          this.uiService.presentToast('Producto agregado al carrito');
          this.carrito.nuevoCarrito.emit( resp['carrito'] );               
        }
        if (resp['ok'] === 'existe') {
          this.uiService.presentToastError(resp['msg']);
        }
      });  
  }

  async compartir() {    
    const images = this.product.img
    let filesArray = []

    images.forEach( async (element:string) => {      
      const tmp = element.split('/')
      const name = tmp[tmp.length - 1];
      
      const response = await fetch(`${URL}/${element}`);
      const blob = await response.blob();
  
      filesArray.push(new File([blob],name, {type: "image/jpeg",lastModified: new Date().getTime()}))     
    })
    
    setTimeout(() => {  
      // this.menuOptService.compartirArticulo(filesArray,'Este es el producto del que te hablé...')
      // navigator['share']({files: filesArray, title: 'PAGINA DEL PRODUCTO', text: 'texto', url: '' })      
    }, 3000);    
  }

  SetDiscount(event) {      
    console.log(event.target.value);
    this.detalles.descuento = Number(event.target.value);
    console.log(this.detalles.descuento);    
  }

  regresarPagina() {
    this.uiService.regresarPagina();
  }

  regresar() {
    this.uiService.regresar();
  }
  }

  



