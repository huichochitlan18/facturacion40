import { DatePipe } from '@angular/common';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  FormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CatalogosService } from '../services/catalogos.service';
import {
  TipoDeComprobante,
  FormaPago,
  MetodoPago,
  Moneda,
} from '../interfaces/catalogos.interface';
import { Observable, catchError, throwError, EMPTY } from 'rxjs';

export interface PeriodicElement {
  position: number;
  descripcion: string;
  productoOServicio: string;
  unidad: number;
  cantidad: number;
  valorUnitario: number;
  importe: number;
  descuento: number;
  objetoDeImpuesto: string;
}

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    descripcion: 'Hydrogen',
    productoOServicio: 'test',
    unidad: 1.0079,
    cantidad: 1.0079,
    valorUnitario: 1.0079,
    importe: 1.0079,
    descuento: 1.0079,
    objetoDeImpuesto: 'test',
  },
];

@Component({
  selector: 'app-generar',
  templateUrl: './generar.component.html',
  styleUrls: ['./generar.component.css'],
  providers: [DatePipe],
  // providers: [
  //   { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  // ]
  // host: {
  //   '(document:keypress)': 'handleKeyboardEvent($event)'
  // }
})
export class GenerarComponent implements OnInit {
  // factura:FormGroup = this.fb.group({
  //   cp:['aa',Validators.required]
  // })
  public factura!: UntypedFormGroup;
  public test!: UntypedFormGroup;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // console.log(event.key);
    // if(event.key === 'Escape'){
    //   console.log("test");
    // }
    // console.log(this.control);
    // if(event.key){
    //   event.key === 'Escape'? this.factura.controls[this.control].setValue(''):'';
    // }
    // this.factura.controls[$event.target.id].setValue('');
    // console.log(event);
  }

  fecha = new Date();
  fechaHoy: any;
  selectedElement: any;
  facturaGloba: boolean = false;
  exportacion: boolean = false;
  agregarProducto: boolean = false;
  aCuentaDeTerceros: boolean = false;
  numeroPedimento: boolean = false;
  tieneFacturasRelacionadas: boolean = false;
  agregarFacturasRelacionadas: boolean = false;
  value = 'Clear me';

  control: any;

  catalogoTipoDeComprobante: TipoDeComprobante[] = [];
  catalogoFormaPago: FormaPago[] = [];
  catalogoMetodoPago: MetodoPago[] = [];
  catalogoMoneda: Moneda[] = [];
  catalogoMonedaFiltro: Moneda[] = [];

  displayedColumns: string[] = [
    'position',
    'descripcion',
    'productoOServicio',
    'unidad',
    'cantidad',
    'valorUnitario',
    'importe',
    'descuento',
    'objetoDeImpuesto',
  ];
  dataSource = ELEMENT_DATA;

  constructor(
    private fb: UntypedFormBuilder,
    private datePipe: DatePipe,
    private catalogosService: CatalogosService
  ) {
    // this.fechaHoy = console.log(this.datePipe.transform(this.fecha, 'MM/dd/yyyy'));
    this.factura = this.fb.group({
      // comprobante
      regimenFiscal: ['', Validators.required],
      cp: ['50200', Validators.required],
      fechaEmision: [new Date(), Validators.required],
      // datos generales
      moneda: ['', Validators.required],
      tipoDeCambio: ['', Validators.required],
      serie: ['', Validators.required],
      folio: ['', Validators.required],
      condicionesDePago: ['', Validators.required],
    });
    this.factura.controls['cp'].setValue('11111');
    console.log(this.factura.value.cp);
  }

  ngOnInit(): void {
    this.listaTipoDeComprobante();
    // this.listaFormaPago();
    // this.listaMetodoPago();
    // this.listaMoneda();
    // console.log(this.filter());
  }

  esFacturaGloba($event: MatCheckboxChange): void {
    this.facturaGloba = $event.checked;
  }
  esExportacion($event: MatCheckboxChange): void {
    this.exportacion = $event.checked;
  }
  mostrarAgregarProducto(): void {
    this.agregarProducto
      ? (this.agregarProducto = false)
      : (this.agregarProducto = true);
  }
  mostrarACuentaDeTerceros($event: MatCheckboxChange): void {
    this.aCuentaDeTerceros = $event.checked;
  }
  mostrarNumeroPedimento(): void {
    this.numeroPedimento
      ? (this.numeroPedimento = false)
      : (this.numeroPedimento = true);
  }
  monstrartieneFacturasRelacionadas($event: MatCheckboxChange): void {
    this.tieneFacturasRelacionadas = $event.checked;
  }
  mostrarAgregarFacturasRelacionadas(): void {
    this.agregarFacturasRelacionadas
      ? (this.agregarFacturasRelacionadas = false)
      : (this.agregarFacturasRelacionadas = true);
  }
  controlSeleccionado($event: any) {
    this.control = $event.target.id;
    console.log($event);

    // this.factura.controls[$event.target.id].setValue('');
    // console.log($event.target.id)
  }
  testf(event: any) {
    console.log(event.target.value);
  }

  listaTipoDeComprobante() {
    // this.catalogosService.tipoDeComprobante().subscribe((TipoDeComprobante) => {
    //   this.catalogoTipoDeComprobante = TipoDeComprobante;
    //  console.log(TipoDeComprobante);
    // });
    this.catalogosService
      .tipoDeComprobante()
      .pipe(
        catchError(() => {
          return EMPTY;
          // return throwError(()=> new Error('error en la peticion'))
        })
      )
      .subscribe({
        next: (TipoDeComprobante) => {
          this.catalogoTipoDeComprobante = TipoDeComprobante;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  listaFormaPago() {
    this.catalogosService.formaPago().subscribe((FormaPago) => {
      this.catalogoFormaPago = FormaPago;
      // console.log(FormaPago);
    });
  }

  listaMetodoPago() {
    this.catalogosService.metodoPago().subscribe((MetodoPago) => {
      this.catalogoMetodoPago = MetodoPago;
      // console.log(MetodoPago);
    });
  }
  listaMoneda() {
    this.catalogosService.moneda().subscribe((Moneda) => {
      this.catalogoMoneda = Moneda;
      // console.log(Moneda);
    });
  }

  obtenerTituloMoenda(Moneda: string): string {
    return this.catalogoMoneda.find((moneda) => moneda.Moneda === Moneda)
      ?.Descripcion!;
  }

  filter(Moneda: string): void {
    Moneda = Moneda.toLowerCase();
    this.catalogoMonedaFiltro = this.catalogoMoneda.filter((moneda) =>
      moneda.Descripcion.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .includes(Moneda)
    );
  }
}
