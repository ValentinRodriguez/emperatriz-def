export interface RespuestaPost {
  ok: boolean;
  posts: Post[];
}

export interface RespuestaClientes {
  ok: boolean;
  data: Clientes[];
}

export interface RespuestaSugerencias {
  ok: boolean;
  sugerencia: Sugerencia[];
}

export interface RespuestaPedidos {
  ok: boolean;
  pedidos: Pedidos[];
}

export interface RespuestaProductos {
  ok: boolean;
  data: Productos[];
}

export interface RespuestaCarrito {
  ok: boolean;
  carrito: Productos[];
}

export interface RespuestaPagos {
  ok: boolean;
  productos: Pagos[];
}
export interface RespuestaSolicitudes {
  ok: boolean;
  solicitudes: Solicitudes[];
}

export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Sugerencia {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  favor?: string;
  contra?: string;
  created?: string;
}

export interface Usuario {
  _id?:           string,
  user?:          string,
  first_name?:    string,
  last_name?:     string,
  address_1?:     string,
  address_2?:     string,
  city?:          string,
  state?:         string,
  postcode?:      string,
  country?:       string,
  phone?:         string,
  avatar?:        string;
  email?:         string;
  password?:      string;
  pin?:           string;
  puntos?:        number,
  faltantes?:     number,
  rango?:         string,
  porcentaje?:    number,  
  administrator?: boolean
}

export interface Pedidos {
  seller?: string;
  buyer?: string;
  price?: number;
  name?: string;
  desc?: string;     
  id?: string;
  show_phone?: string;
  categories?: string;
  type?: string;
  city?: string;      
  address?: string;
  street?: string;     
  payMethod?: string; 
  payed?: string;     
  owed?: string;     
  images?:  string[];
  quantity?: number;
  created?: string; 
  disponibles?: number;
  _id?: string;  
  usuario?: string;
  idProducto?: number;
}

export interface Clientes {
  first_name?: string,
  last_name?:  string,
  city?:       string,
  address_1?:  string,
  address_2?:  string,
  phone?:      string,
  email?:      string,
  desc?:       string,
  created?:    Date,
  estado?:     boolean,
  usuario?:    string
}

export interface Productos {
  ok?: boolean,
  nombre?: string
  precio?: number
  precio_compra?: number, 
  categoria?: string,
  descripcion?: string ,
  img?: string,
  descuento?: number, 
  ganancia?: number,
  attributes?:  string,
  average_rating?: number,
  date_created?: Date, 
  dimensions?: string,
  purchase_note?: string,
  regular_price?: number,
  envios?: string,
  proveedor?: string,
  sku?:  string,
  width?: number,
  height?: number,
  weight?: number,
  provider?: string,
  stock_quantity?: number,
  usuario?: string,
  estado?: boolean
}

export interface Carrito {
  title?: string;
  price?: number;
  condition?: string;
  type?: string;
  item?: string;
  disponibles?: number;
  category?: string;
  quantity?: number;
  idProducto?: string;
  idCarrito?: string;
  desc?: string;
  rating?: number;
  imgs?: any[];
  coords?: string;
  created?: string;
  _id?: string;
  pathUnico?: string;
  usuario?: Usuario;
}

export interface Menu {
  icon: string;
  name: string;
  redirectTo: string;
}

export interface Pagos {
  seller?: string;
  buyer?: string;
  price?: number;
  name?: string;
  desc?: string;     
  item?: string;    
  category?: string;
  quantity?: number;
  payed?: string;
  created?: string; 
  imgs?: string[], 
  pathUnico?: string,
  idProducto?: number;
  idPedido?: number;
  _id?: string;  
  usuario?: string;
}

export interface Solicitudes{
  title?:     string,
  price?:     string,
  category?:  string,
  desc?:      string,
  productos?: string[],
  seller?:    string,
  buyer?:     string,
  item?:      string,
  enlace?: string,
  created?:   Date,
  disponibles?: number[]
}

export interface RespuestaLogin{
  ok: boolean,
  usuario: Object,
  token:string
}