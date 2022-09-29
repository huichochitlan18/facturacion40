export interface TipoDeComprobante {
    _id:                 string;
    TipoDeComprobante:   string;
    Descripcion:         string;
    ValorMaximo:         string;
    FechaInicioVigencia: Date;
    FechaFinVigencia:    Date;
}

export interface FormaPago {
    _id:                         string;
    FormaPago:                   string;
    Descripcion:                 string;
    Bancarizado:                 string;
    NumeroOperacion:             string;
    RfcEmisorCuentaOrdenante:    string;
    CuentaOrdenante:             string;
    PatronCuentaOrdenante:       string;
    RfcEmisorCuentaBeneficiario: string;
    CuentaBeneficiario:          string;
    PatronCuentaBeneficiaria:    string;
    TipoCadenaPago:              string;
    BancoCtaOrdenanteExtranjero: string;
    FechaInicioVigencia:         Date;
    FechaFinVigencia:            Date;
}

export interface MetodoPago {
    _id:                 string;
    MetodoPago:          string;
    Descripcion:         string;
    FechaInicioVigencia: Date;
    FechaFinVigencia:    Date;
}

export interface Moneda {
    _id:                 string;
    Moneda:              string;
    Descripcion:         string;
    Decimales:           number;
    PorcentajeVariacion: number;
    FechaInicioVigencia: Date;
    FechaFinVigencia:    Date;
}
