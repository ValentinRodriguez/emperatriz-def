(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1157],{1157:(e,o,t)=>{"use strict";t.r(o),t.d(o,{Tab1PageModule:()=>O});var r=t(2859),i=t(8583),n=t(3679),a=t(3256),s=t(4762),c=t(4227),p=t(2666),l=t(3018),d=t(6638),u=t(910);let g=(()=>{class e{constructor(e,o,t){this.router=e,this.cartService=o,this.applicationRef=t,this.cantidad=0}ngOnInit(){this.cartService.nuevoCarrito.subscribe(e=>{this.cantidad+=1,this.applicationRef.tick()}),this.cartService.productoCarritoBorrado.subscribe(()=>{this.cantidad-=1,this.applicationRef.tick()}),this.cartService.productoCarritoVaciado.subscribe(()=>{this.cantidad=0}),this.cartService.getCarrito().subscribe(e=>{this.cantidad=e.data.length})}doSearch(){this.router.navigateByUrl("/search")}irCarrito(){this.router.navigateByUrl("/home/tabs/tab3")}}return e.\u0275fac=function(o){return new(o||e)(l.Y36(a.F0),l.Y36(u.N),l.Y36(l.z2F))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-header"]],decls:12,vars:1,consts:[[1,"home-top-nav"],[1,"animate__animated","animate__fadeIn","animate__faster"],["size","8"],["color","primary"],["slot","start"],["size","2",1,"ion-text-end"],["size","large","color","light","name","search",3,"click"],["size","large","color","light","name","bag-handle",3,"click"]],template:function(e,o){1&e&&(l.TgZ(0,"ion-grid",0),l.TgZ(1,"ion-row",1),l.TgZ(2,"ion-col",2),l.TgZ(3,"ion-toolbar",3),l.TgZ(4,"ion-buttons",4),l._UZ(5,"ion-menu-button"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-col",5),l.TgZ(7,"ion-icon",6),l.NdJ("click",function(){return o.doSearch()}),l.qZA(),l.qZA(),l.TgZ(8,"ion-col",5),l.TgZ(9,"ion-badge",3),l._uU(10),l.qZA(),l.TgZ(11,"ion-icon",7),l.NdJ("click",function(){return o.irCarrito()}),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(10),l.Oqu(o.cantidad))},directives:[r.jY,r.Nd,r.wI,r.sr,r.Sm,r.fG,r.gu,r.yp],styles:["ion-badge[_ngcontent-%COMP%]{position:absolute;right:-7px;top:1px;background-color:var(--ion-color-warning-tint)!important;z-index:1}"]}),e})();var h=t(2662),m=t(7349);function f(e,o){if(1&e){const e=l.EpF();l.TgZ(0,"ion-slide",19),l.TgZ(1,"ion-col",20),l.NdJ("click",function(){const o=l.CHM(e).$implicit;return l.oxw().verProductos(o.uid)}),l._UZ(2,"ion-img",21),l.ALo(3,"invProductos"),l.TgZ(4,"p",22),l._uU(5),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=o.$implicit;l.xp6(2),l.Q6J("src",l.lcZ(3,2,e.img)),l.xp6(3),l.Oqu(e.descripcion)}}function b(e,o){if(1&e&&(l.TgZ(0,"ion-slide",23),l.TgZ(1,"ion-col"),l._UZ(2,"ion-img",21),l.ALo(3,"invProductos"),l.qZA(),l.qZA()),2&e){const e=o.$implicit;l.xp6(2),l.Q6J("src",l.lcZ(3,1,e.img))}}function Z(e,o){if(1&e&&(l.TgZ(0,"span"),l._uU(1),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(1),l.hij("$RD ",e.precio,"")}}function x(e,o){if(1&e&&(l.TgZ(0,"span"),l._uU(1),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(1),l.hij("$RD ",e.precio-e.descuento*(e.precio/100),"")}}function A(e,o){if(1&e&&(l.TgZ(0,"small",31),l.TgZ(1,"del"),l._uU(2),l.qZA(),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(2),l.hij("$RD ",e.precio,"")}}function w(e,o){if(1&e&&(l.TgZ(0,"ion-text",32),l.TgZ(1,"b",33),l._uU(2),l.qZA(),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(2),l.hij("",e.descuento,"% Off!")}}function P(e,o){if(1&e){const e=l.EpF();l.TgZ(0,"ion-slide",24),l.NdJ("click",function(){const o=l.CHM(e).$implicit;return l.oxw().detalleProducto(o)}),l.TgZ(1,"ion-col"),l._UZ(2,"ion-img",21),l.ALo(3,"invProductos"),l.TgZ(4,"div",4),l.TgZ(5,"h4",25),l._uU(6),l.qZA(),l.TgZ(7,"small",26),l._uU(8),l.qZA(),l.TgZ(9,"h4",27),l.YNc(10,Z,2,1,"span",28),l.YNc(11,x,2,1,"span",28),l.YNc(12,A,3,1,"small",29),l.YNc(13,w,3,1,"ion-text",30),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=o.$implicit;l.xp6(2),l.Q6J("src",l.lcZ(3,7,e.img[0])),l.xp6(4),l.hij(" ",e.nombre," "),l.xp6(2),l.Oqu(e.uid),l.xp6(2),l.Q6J("ngIf",null===e.descuento),l.xp6(1),l.Q6J("ngIf",null!==e.descuento),l.xp6(1),l.Q6J("ngIf",null!==e.descuento),l.xp6(1),l.Q6J("ngIf",null!==e.descuento)}}function _(e,o){if(1&e&&(l.TgZ(0,"span"),l._uU(1),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(1),l.hij("$RD ",e.precio,"")}}function y(e,o){if(1&e&&(l.TgZ(0,"span"),l._uU(1),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(1),l.hij("$RD ",e.precio-e.descuento*(e.precio/100),"")}}function v(e,o){if(1&e&&(l.TgZ(0,"small",38),l.TgZ(1,"del"),l._uU(2),l.qZA(),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(2),l.hij("$RD ",e.precio,"")}}function T(e,o){if(1&e&&(l.TgZ(0,"ion-text",32),l.TgZ(1,"b",39),l._uU(2),l.qZA(),l.qZA()),2&e){const e=l.oxw().$implicit;l.xp6(2),l.hij("",e.descuento,"% Off!")}}function k(e,o){if(1&e){const e=l.EpF();l.TgZ(0,"ion-col",34),l.NdJ("click",function(){const o=l.CHM(e).$implicit;return l.oxw().detalleProducto(o)}),l._UZ(1,"ion-img",35),l.ALo(2,"invProductos"),l.TgZ(3,"div",4),l.TgZ(4,"h4",36),l._uU(5),l.qZA(),l.TgZ(6,"h4",27),l.YNc(7,_,2,1,"span",28),l.YNc(8,y,2,1,"span",28),l.YNc(9,v,3,1,"small",37),l.YNc(10,T,3,1,"ion-text",30),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=o.$implicit;l.xp6(1),l.Q6J("src",l.lcZ(2,6,e.img[0])),l.xp6(4),l.hij(" ",e.nombre," "),l.xp6(2),l.Q6J("ngIf",null===e.descuento),l.xp6(1),l.Q6J("ngIf",null!==e.descuento),l.xp6(1),l.Q6J("ngIf",null!==e.descuento),l.xp6(1),l.Q6J("ngIf",null!==e.descuento)}}const q=function(){return{slidesPerView:"auto",zoom:!1,grabCursor:!0}},M=function(){return{zoom:!1,grabCursor:!0,initialSlide:0,slidesPerView:1,autoplay:!0,speed:380}},S=[{path:"",component:(()=>{class e{constructor(e,o,t){this.menu=e,this.woocommerceSrv=o,this.modalCtrl=t,this.categorias=[],this.banners=[],this.recienLlegados=[],this.ofertas=[],this.mobiles=[{product_id:1,productImage:"../../../assets/products/iphone-12-pro-blue-150x150.png",productName:"Apple iPhone 12 32GB",brand:"Apple",shortName:"iPhone 12 32GB",off:45,productLongDescription:"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all \u2014 in two perfect sizes.",productShortDescription:"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",regularPrice:69e3,salesPrice:69900},{product_id:2,productImage:"../../../assets/products/iphone-12-mini-hero-150x150.jpeg",productName:"Apple iPhone 12 Pro  64GB",brand:"Apple",off:45,shortName:"iPhone 12 Pro 64GB",productLongDescription:"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level \u2014 with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let\u2019s see what this thing can do.",productShortDescription:"A14 Bionic rockets past every other smartphone chip.",regularPrice:199e3,salesPrice:119e3},{product_id:3,productImage:"../../../assets/products/iPhone-SE-2020-Red.jpg?resize=150%2C150&ssl=1",productName:"Apple iPhone SE 32GB",brand:"Apple",off:53,shortName:"iPhone SE 32GB",productLongDescription:"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. It\u2019s just what you\u2019ve been waiting for.",productShortDescription:"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. ",regularPrice:39e3,salesPrice:39e3},{product_id:4,productImage:"../../../assets/products/APPLE-IPHONE-11-PRO-MAX-Midnight-Green-CellucityPhoneHub-150x150.png",productName:"Apple iPhone 11 32GB",brand:"Apple",off:25,shortName:"iPhone 11 32GB",productLongDescription:"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods. Included in the box is a USB\u2011C to Lightning cable that supports fast charging and is compatible with USB\u2011C power adapters and computer ports.",productShortDescription:"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods.",regularPrice:54e3,salesPrice:50490},{product_id:5,productImage:"../../../assets/products/apple-macbook-pro-silver-7-150x150.jpg",productName:"iMac Intel Xeon 8GB 4K Retina",brand:"Apple",off:45,shortName:"Apple iMac",productLongDescription:"The all-in-one for all. If you can dream it, you can do it on iMac. It\u2019s beautifully designed, incredibly intuitive and packed with powerful tools that let you take any idea to the next level. And the new 27-inch model elevates the experience in every way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It\u2019s the desktop that does it all \u2014 better and faster than ever.",productShortDescription:"The all-in-one for all. If you can dream it, you can do it on iMac.",regularPrice:99e3,salesPrice:99900},{product_id:6,productImage:"../../../assets/products/Apple-MacBook-Air-150x150.png",productName:"Apple MacBook Air 128GB SSD",brand:"Apple",off:15,shortName:"MacBook Air",productLongDescription:"The incredibly thin and light MacBook Air is now more powerful than ever. It features a brilliant Retina display, new Magic Keyboard, Touch ID, processors with up to twice the performance,1 faster graphics and double the storage capacity. The sleek wedge-shaped design is created from 100% recycled aluminium, making it the greenest Mac ever.2 And with all-day battery life, our most popular Mac is your perfectly portable, do-it-all notebook.",productShortDescription:"The incredibly thin and light MacBook Air is now more powerful than ever.",regularPrice:99090,salesPrice:92900},{product_id:7,productImage:"../../../assets/products/apple-macbook-pro-silver-7-150x150.jpg",productName:"Apple MacBook Pro 512GB SSD",brand:"Apple",off:22,shortName:"MacBook Pro",productLongDescription:"MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you\u2019ll get there faster than ever with high\u2011performance processors and memory, advanced graphics, blazing\u2011fast storage and more \u2014 all in a compact 1.4-kilogram package.",productShortDescription:"MacBook Pro elevates the notebook to a whole new level of performance and portability.",regularPrice:199e3,salesPrice:199e3}],this.newArrivals=[{product_id:1,productImage:"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",productName:"Women Fashion Handbags Tote Bag Shoulder Bag Top Handle Satchel Purse",brand:"Bagger IN",shortName:"Women Fashion Handbag",off:15,productLongDescription:"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all \u2014 in two perfect sizes.",productShortDescription:"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",regularPrice:980,salesPrice:850},{product_id:2,productImage:"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",productName:"Halife Women's Long Sleeve Boat Neck Off Shoulder Blouse Tops",brand:"Halife US",off:45,shortName:"Women's Long Sleeve",productLongDescription:"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level \u2014 with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let\u2019s see what this thing can do.",productShortDescription:"A14 Bionic rockets past every other smartphone chip.",regularPrice:1200,salesPrice:999},{product_id:3,productImage:"../../../assets/products/502e._jollify-blue-ble-slim-fit-mens-jeans.jpg",productName:"Derby Fashion Mens Denim Jean",brand:"Derby IN",off:53,shortName:"Derby Mens Denim Jean",productLongDescription:"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. It\u2019s just what you\u2019ve been waiting for.",productShortDescription:"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. ",regularPrice:2500,salesPrice:1500},{product_id:4,productImage:"../../../assets/products/41Ngmp4DwSL._SY300_QL70_ML2_.jpg",productName:"Woodlands Means Leather Wallet",brand:"Woodlands",off:12,shortName:"Woodlands Mens Wallet",productLongDescription:"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods. Included in the box is a USB\u2011C to Lightning cable that supports fast charging and is compatible with USB\u2011C power adapters and computer ports.",productShortDescription:"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods.",regularPrice:650,salesPrice:499},{product_id:5,productImage:"../../../assets/products/Sony_Xperia_1_Price_in_2019_-_Full_phone_specifications.jpg",productName:"Sony Xperia 1 II Black",brand:"Sony",off:45,shortName:"Sony Xperia 1 II ",productLongDescription:"The all-in-one for all. If you can dream it, you can do it on iMac. It\u2019s beautifully designed, incredibly intuitive and packed with powerful tools that let you take any idea to the next level. And the new 27-inch model elevates the experience in every way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It\u2019s the desktop that does it all \u2014 better and faster than ever.",productShortDescription:"The all-in-one for all. If you can dream it, you can do it on iMac.",regularPrice:99e3,salesPrice:99900},{product_id:6,productImage:"../../../assets/products/4d52b131-5885-48ff-bdfe-d051a48b3877._CR51,51,508,508_PT0_SX300__.jpg",productName:"Apple Wired Earpods 3.5MM Jack",brand:"Apple",off:15,shortName:"Apple Earpods",productLongDescription:"The incredibly thin and light MacBook Air is now more powerful than ever. It features a brilliant Retina display, new Magic Keyboard, Touch ID, processors with up to twice the performance,1 faster graphics and double the storage capacity. The sleek wedge-shaped design is created from 100% recycled aluminium, making it the greenest Mac ever.2 And with all-day battery life, our most popular Mac is your perfectly portable, do-it-all notebook.",productShortDescription:"The incredibly thin and light MacBook Air is now more powerful than ever.",regularPrice:2688,salesPrice:1200},{product_id:7,productImage:"../../../assets/products/410wL1a4LML._SY300_QL70_ML2_.jpg",productName:"Titan Mens Watch TM-7867",brand:"Titan",off:88,shortName:"Titan Mens Watch",productLongDescription:"MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you\u2019ll get there faster than ever with high\u2011performance processors and memory, advanced graphics, blazing\u2011fast storage and more \u2014 all in a compact 1.4-kilogram package.",productShortDescription:"MacBook Pro elevates the notebook to a whole new level of performance and portability.",regularPrice:9866,salesPrice:983}]}ngOnInit(){this.cargaPagina()}detalleProducto(e){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:p.p,componentProps:{product:e}})).present()})}cargaPagina(e){this.woocommerceSrv.wooProductsHome().subscribe(o=>{console.log(o),o.ok&&(this.banners=o.data.banners,this.categorias=o.data.categorias,this.recienLlegados=o.data.recienLlegados,this.ofertas=o.data.ofertas),e&&e.target.complete()})}openMenu(){this.menu.enable(!0,"first"),this.menu.open("first")}verProductos(e){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:c.L,componentProps:{categoria:e}})).present()})}}return e.\u0275fac=function(o){return new(o||e)(l.Y36(r._q),l.Y36(d.T),l.Y36(r.IN))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-tab1"]],decls:48,vars:26,consts:[[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["pullingIcon","arrow-down-outline","refreshingSpinner","circles","refreshingText","Cargando..."],[1,"categories-grid","animate__animated","animate__fadeIn","animate__faster"],[1,"ion-padding-top"],["color","dark"],[1,"no-gap"],[3,"options"],["class","x-small-card",4,"ngFor","ngForOf"],[1,"animate__animated","animate__fadeIn","animate__faster"],["autoplay","1000",3,"options"],["class","lg-cards","routerLink","/single-product-view",4,"ngFor","ngForOf"],["size","9"],["size","3",1,"ion-text-end"],["color","primary","size","small",1,"card-header-btn"],["class","md-cards",3,"click",4,"ngFor","ngForOf"],["routerLink","/product-list","color","primary","size","small",1,"card-header-btn"],["size-xs","6","size-sm","6","size-md","3","size-lg","3","class","card-border",3,"click",4,"ngFor","ngForOf"],[1,"bottom-bar-padding"],[1,"x-small-card"],[3,"click"],[1,"card-image","round-edge",3,"src"],[1,"ion-text-uppercase","left-text","no-gap"],["routerLink","/single-product-view",1,"lg-cards"],[1,"md-cards",3,"click"],[1,"ion-text-start","no-gap","text-oflow-lg"],[1,"ion-text-start","no-gap","text-oflow-lg","text-muted","x-small"],["color","dark",1,"ion-text-start","no-gap"],[4,"ngIf"],["class","text-muted x-small",4,"ngIf"],["color","danger",4,"ngIf"],[1,"text-muted","x-small"],["color","danger"],[1,"ion-float-right","x-small"],["size-xs","6","size-sm","6","size-md","3","size-lg","3",1,"card-border",3,"click"],[1,"card-image",3,"src"],[1,"ion-text-start","no-gap","text-oflow-md"],["class","text-muted",4,"ngIf"],[1,"text-muted"],[1,"ion-float-right","small"]],template:function(e,o){1&e&&(l._UZ(0,"app-header"),l.TgZ(1,"ion-content",0),l.TgZ(2,"ion-refresher",1),l.NdJ("ionRefresh",function(e){return o.cargaPagina(e)}),l._UZ(3,"ion-refresher-content",2),l.qZA(),l.TgZ(4,"ion-grid",3),l.TgZ(5,"ion-row"),l.TgZ(6,"ion-col",4),l.TgZ(7,"ion-text",5),l.TgZ(8,"h3",6),l.TgZ(9,"strong"),l._uU(10),l.ALo(11,"translate"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(12,"ion-slides",7),l.YNc(13,f,6,4,"ion-slide",8),l.qZA(),l.qZA(),l.TgZ(14,"ion-grid",9),l.TgZ(15,"ion-slides",10),l.YNc(16,b,4,3,"ion-slide",11),l.qZA(),l.qZA(),l.TgZ(17,"ion-grid",9),l.TgZ(18,"ion-row"),l.TgZ(19,"ion-col",12),l.TgZ(20,"ion-text",5),l.TgZ(21,"h4",5),l._uU(22,"\u2728 "),l.TgZ(23,"strong"),l._uU(24),l.ALo(25,"translate"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(26,"ion-col",13),l.TgZ(27,"ion-button",14),l._uU(28),l.ALo(29,"translate"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(30,"ion-slides",7),l.YNc(31,P,14,9,"ion-slide",15),l.qZA(),l.qZA(),l.TgZ(32,"ion-grid"),l.TgZ(33,"ion-row"),l.TgZ(34,"ion-col",12),l.TgZ(35,"ion-text",5),l.TgZ(36,"h4",5),l._uU(37,"\ud83d\udd25 "),l.TgZ(38,"strong"),l._uU(39),l.ALo(40,"translate"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(41,"ion-col",13),l.TgZ(42,"ion-button",16),l._uU(43),l.ALo(44,"translate"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(45,"ion-row",9),l.YNc(46,k,11,8,"ion-col",17),l.qZA(),l.qZA(),l.qZA(),l._UZ(47,"div",18)),2&e&&(l.xp6(1),l.Q6J("fullscreen",!0),l.xp6(9),l.Oqu(l.lcZ(11,13,"CATEGORIAS")),l.xp6(2),l.Q6J("options",l.DdM(23,q)),l.xp6(1),l.Q6J("ngForOf",o.categorias),l.xp6(2),l.Q6J("options",l.DdM(24,M)),l.xp6(1),l.Q6J("ngForOf",o.banners),l.xp6(8),l.Oqu(l.lcZ(25,15,"Recien Llegados")),l.xp6(4),l.Oqu(l.lcZ(29,17,"Ver m\xe1s")),l.xp6(2),l.Q6J("options",l.DdM(25,q)),l.xp6(1),l.Q6J("ngForOf",o.recienLlegados),l.xp6(8),l.hij("",l.lcZ(40,19,"En oferta"),"!"),l.xp6(4),l.Oqu(l.lcZ(44,21,"Ver m\xe1s")),l.xp6(3),l.Q6J("ngForOf",o.ofertas))},directives:[g,r.W2,r.nJ,r.Wo,r.jY,r.Nd,r.wI,r.yW,r.Hr,i.sg,r.YG,r.YI,a.rH,r.A$,r.Xz,i.O5],pipes:[h.X$,m.v],styles:[".no-gap[_ngcontent-%COMP%]{padding:0!important;margin:0!important}.left-text[_ngcontent-%COMP%]{position:absolute;bottom:29px;top:72px;left:11px;font-weight:800;font-size:x-small;text-align:left!important;width:auto;color:#141313}.categories-grid[_ngcontent-%COMP%]{padding-top:90px!important;margin-bottom:10px}.categories-row[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:6px}.text-oflow-sm[_ngcontent-%COMP%]{width:135px}.text-oflow-lg[_ngcontent-%COMP%], .text-oflow-sm[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}.text-oflow-lg[_ngcontent-%COMP%]{width:285px}.text-oflow-md[_ngcontent-%COMP%]{display:inline-block;width:155px!important;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}.x-small-card[_ngcontent-%COMP%]{width:80px!important;height:90px!important}.sm-cards[_ngcontent-%COMP%]{width:150px;height:240px}.md-cards[_ngcontent-%COMP%], .sm-cards[_ngcontent-%COMP%]{border:2px solid #f8f8f8}.md-cards[_ngcontent-%COMP%]{width:225px;height:300px}.lg-cards[_ngcontent-%COMP%]{width:300px;height:190px}.card-border[_ngcontent-%COMP%]{border:2px solid #f8f8f8}.card-image[_ngcontent-%COMP%]{pointer-events:none}.bottom-bar-padding[_ngcontent-%COMP%]{padding-bottom:80px}.round-edge[_ngcontent-%COMP%]{border-radius:8px!important;overflow:hidden!important;box-shadow:0 1px 9px #00000026!important}.card-header-btn[_ngcontent-%COMP%]{margin:11px}.text-muted[_ngcontent-%COMP%]{color:#6c757d!important}.x-small[_ngcontent-%COMP%]{font-size:x-small}.small[_ngcontent-%COMP%]{font-size:small}.xx-small[_ngcontent-%COMP%]{font-size:xx-small}"]}),e})()}];let I=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[a.Bz.forChild(S)],a.Bz]}),e})();var N=t(5503),C=t(5642);let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.Pc,N.D,i.ez,n.u5,C.K,I,h.aw]]}),e})()}}]);