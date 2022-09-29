import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoaderComponent } from './shared/loader/loader.component';

const routes: Routes = [
  // m es la variable de module, se puede llamar como sea, pero como contiene modulos pues por eso se llama module
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'facturacion',
    loadChildren: () => import('./facturacion/facturacion.module').then( m => m.FacturacionModule)
  },
  {
    path: '',
    component: LoaderComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
