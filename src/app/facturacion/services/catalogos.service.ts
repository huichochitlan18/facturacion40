import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TipoDeComprobante, FormaPago, MetodoPago, Moneda } from '../interfaces/catalogos.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  tipoDeComprobante():Observable<TipoDeComprobante[]>{
    return this.http.get<TipoDeComprobante[]>(`${ this.baseUrl }/ctipodecomprobante`);
  }

  formaPago():Observable<FormaPago[]>{
    return this.http.get<FormaPago[]>(`${ this.baseUrl }/cformapago`);
  }
  
  metodoPago():Observable<MetodoPago[]>{
    return this.http.get<MetodoPago[]>(`${ this.baseUrl }/cmetodopago`);
  }

  moneda():Observable<Moneda[]>{
    return this.http.get<Moneda[]>(`${ this.baseUrl }/cmoneda`);
  }

}