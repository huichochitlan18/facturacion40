import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { GenerarComponent } from './generar/generar.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},      
      {path: 'generar', component: GenerarComponent},      
      // {path: 'editar/:id',component: AgregarComponent},
      // {path: 'buscar',component: BuscarComponent},
      // {path: ':id',component: HeroeComponent},
      {path: '**',redirectTo: 'dashboard'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FacturacionRoutingModule { }
