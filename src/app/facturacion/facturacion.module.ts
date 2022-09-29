import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GenerarComponent } from './generar/generar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacturacionRoutingModule } from './facturacion-routing.module';
import { AngularMaterialModule } from '../module/angular-material/angular-material.module';
import { MenuComponent } from './menu/menu.component';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    HomeComponent,    
    GenerarComponent,
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,    
    FacturacionRoutingModule,
    AngularMaterialModule,
    MatNativeDateModule,    
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(options)
  ] 
  
})
export class FacturacionModule { }
