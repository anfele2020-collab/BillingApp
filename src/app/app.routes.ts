import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'clientes',
    loadComponent: () => import('./clientes/clientes.page').then( m => m.ClientesPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.page').then( m => m.UsuariosPage)
  },
  {
    path: 'facturas',
    loadComponent: () => import('./facturas/facturas.page').then( m => m.FacturasPage)
  },
  {
    path: 'nueva-factura',
    loadComponent: () => import('./nueva-factura/nueva-factura.page').then( m => m.NuevaFacturaPage)
  },
  {
    path: 'nuevo-detalle',
    loadComponent: () => import('./nuevo-detalle/nuevo-detalle.page').then( m => m.NuevoDetallePage)
  },
];
