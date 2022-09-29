SELECT
    A.id,
    A.id_corporativo,
    A.rfc,
    A.nombre,
    A.descripcion,
    A.estatus,
    A.fecha_alta,
    A.usuario_alta,
    A.fecha_modificacion,
    A.usuario_modificacion,
    B.id AS idparametrostimbrado,
    B.creditosdisponibles,
    B.timbradoscorrectos,
    B.timbradosincorrectos,
    B.creditosdisponiblescp,
    B.timbradoscorrectoscp,
    B.timbradosincorrectoscp,
    C.id AS idlicenciamiento,
    C.fecharegistro,
    C.fechainicial,
    C.fechafinal,
    C.plancontratado,
    C.tipopago,
    C.numerousuarios,
    C.numeroempleados,
    D.domicilio,
    D.numexterior,
    D.numinterior,
    D.cp,
    D.pais,
    D.estado,
    D.municipio,
    D.colonia,
    D.poblacion,
    D.telefono1,
    D.telefono2
FROM
    organigrama.empresa AS A
    LEFT OUTER JOIN nomina.parametrostimbrado AS B ON A.id = B.idempresa
    LEFT OUTER JOIN nomina.licenciamiento AS C ON A.id = C.idempresa
    LEFT OUTER JOIN nomina.empresadomiciliofiscal AS D ON A.id = D.idempresa

SELECT
    organigrama.id,
    organigrama.id_corporativo,
    organigrama.rfc,
    organigrama.nombre,
    organigrama.descripcion,
    organigrama.estatus,
    organigrama.fecha_alta,
    organigrama.usuario_alta,
    organigrama.fecha_modificacion,
    organigrama.usuario_modificacion,
    parametrosTimbrado.id AS idparametrostimbrado,
    parametrosTimbrado.creditosdisponibles,
    parametrosTimbrado.timbradoscorrectos,
    parametrosTimbrado.timbradosincorrectos,
    parametrosTimbrado.creditosdisponiblescp,
    parametrosTimbrado.timbradoscorrectoscp,
    parametrosTimbrado.timbradosincorrectoscp,
    licenciamiento.id AS idlicenciamiento,
    licenciamiento.fecharegistro,
    licenciamiento.fechainicial,
    licenciamiento.fechafinal,
    licenciamiento.plancontratado,
    licenciamiento.tipopago,
    licenciamiento.numerousuarios,
    licenciamiento.numeroempleados,
    empresaDomicilioFiscal.domicilio,
    empresaDomicilioFiscal.numexterior,
    empresaDomicilioFiscal.numinterior,
    empresaDomicilioFiscal.cp,
    empresaDomicilioFiscal.pais,
    empresaDomicilioFiscal.estado,
    empresaDomicilioFiscal.municipio,
    empresaDomicilioFiscal.colonia,
    empresaDomicilioFiscal.poblacion,
    empresaDomicilioFiscal.telefono1,
    empresaDomicilioFiscal.telefono2
FROM
    organigrama.empresa AS organigrama
    LEFT OUTER JOIN nomina.parametrostimbrado AS parametrosTimbrado ON organigrama.id = parametrosTimbrado.idempresa
    LEFT OUTER JOIN nomina.licenciamiento AS licenciamiento ON organigrama.id = licenciamiento.idempresa
    LEFT OUTER JOIN nomina.empresadomiciliofiscal AS empresaDomicilioFiscal ON organigrama.id = empresaDomicilioFiscal.idempresa


100,102,103,105,101,2180,2182
100,101,102,106,123,138,104,2199,2205,2214,2215,2216,2217,2218,2219,2220,2221,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2233,2234,2236,2238,2239,2174,2240,2237,2241,2242,2246,2249,2250,107

select * from organigrama.empresa where rfc = 'HER8301121X4'
select * from nomina.usuariosempresas where idempresa = 1
select 
usuario.id,
usuario.id_corporativo,
usuario.username,
rol.*
from seguridad.usuario as usuario
inner join seguridad.rol as rol  on usuario.id_rol = rol.id
where usuario.id in (100,101,102,106,123,138,104,2199,2205,2214,2215,2216,2217,2218,2219,2220,2221,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2233,2234,2236,2238,2239,2174,2240,2237,2241,2242,2246,2249,2250,107)
100,101,102,106,123,138,104,2199,2205,2214,2215,2216,2217,2218,2219,2220,2221,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2233,2234,2236,2238,2239,2174,2240,2237,2241,2242,2246,2249,2250,107

10004,10015,10020,10032,30044,30089,40351,40352,40357,40379,40380,40381,40382,40383,40384,40385,40386,40387,40388,40389,40390,40391,40392,40393,40394,40395,40396,40397,40398,40399,40441,40443,40446,40447,40448,40451,40453,40454,40461,40486,40487,40490

40323,40460,40493,40496

103,2247,100,107

100,102,103,105,101,2180,2182

10007,10019,20042,20043,40264,40280,40282

10004,10015,10020,10032,30044,30089,40351,40352,40357,40379,40380,40381,40382,40383,40384,40385,40386,40387,40388,40389,40390,40391,40392,40393,40394,40395,40396,40397,40398,40399,40441,40443,40446,40447,40448,40451,40453,40454,40461,40486,40487,40490


103,104,105,106,107,108,109,110,111,112,100

10021,10022,10023,10024,10025,10026,10027,10028,10029,10030,20041
100,102,103,105,101,2180,2182
10004,10015,10020,10032,30044,30089,40351,40352,40357,40379,40380,40381,40382,40383,40384,40385,40386,40387,40388,40389,40390,40391,40392,40393,40394,40395,40396,40397,40398,40399,40441,40443,40446,40447,40448,40451,40453,40454,40461,40486,40487,40490
100,101,102,106,123,138,104,2199,2205,2214,2215,2216,2217,2218,2219,2220,2221,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2233,2234,2236,2238,2239,2174,2240,2237,2241,2242,2246,2249,2250,107

certificado
        Empresa.CertificadoSAT.idEmpresaCertif = objCertificado.CERTIFICADO_EMPRESA.idEmpresaCertif; 
        Empresa.CertificadoSAT.idEmpresa = objCertificado.CERTIFICADO_EMPRESA.idEmpresa; 
        Empresa.CertificadoSAT.idArchivoCER = objCertificado.CERTIFICADO_EMPRESA.idArchivoCER; 
        Empresa.CertificadoSAT.idArchivoKEY = objCertificado.CERTIFICADO_EMPRESA.idArchivoKEY; 
        Empresa.CertificadoSAT.NumeroCertificado = objCertificado.CERTIFICADO_EMPRESA.NumeroCertificado; 
        Empresa.CertificadoSAT.FechaInicial = objCertificado.CERTIFICADO_EMPRESA.FechaInicial; 
        Empresa.CertificadoSAT.FechaFinal = objCertificado.CERTIFICADO_EMPRESA.FechaFinal; 
        Empresa.CertificadoSAT.ContraseniaKey = objCertificado.CERTIFICADO_EMPRESA.ContraseniaKey; 
        Empresa.CertificadoSAT.Estatus = objCertificado.CERTIFICADO_EMPRESA.Estatus; 
        Empresa.CertificadoSAT.idArchivoPFX = objCertificado.CERTIFICADO_EMPRESA.idArchivoPFX; 
        Empresa.CertificadoSAT.Predeterminado = objCertificado.CERTIFICADO_EMPRESA.Predeterminado; 
        Empresa.CertificadoSAT.EstatusString = objCertificado.CERTIFICADO_EMPRESA.EstatusString;        
        Empresa.CertificadoSAT.PredeterminadoString = objCertificado.CERTIFICADO_EMPRESA.PredeterminadoString;        
        Empresa.CertificadoSAT.ArchivoCer = objCertificado.CERTIFICADO_EMPRESA.ArchivoCer; 
        Empresa.CertificadoSAT.ArchivoKey = objCertificado.CERTIFICADO_EMPRESA.ArchivoKey;         
        Empresa.CertificadoSAT.CertificadoFecha = objCertificado.CERTIFICADO_EMPRESA.CertificadoFecha;        
        Empresa.CertificadoSAT.rfc = objCertificado.CERTIFICADO_EMPRESA.rfc; 
        Empresa.CertificadoSAT.nombre = objCertificado.CERTIFICADO_EMPRESA.nombre; 

        certificado.idEmpresaCertif = objCertificado.CERTIFICADO_EMPRESA.idEmpresaCertif; 
        certificado.idEmpresa = objCertificado.CERTIFICADO_EMPRESA.idEmpresa; 
        certificado.idArchivoCER = objCertificado.CERTIFICADO_EMPRESA.idArchivoCER; 
        certificado.idArchivoKEY = objCertificado.CERTIFICADO_EMPRESA.idArchivoKEY; 
        certificado.NumeroCertificado = objCertificado.CERTIFICADO_EMPRESA.NumeroCertificado; 
        certificado.FechaInicial = objCertificado.CERTIFICADO_EMPRESA.FechaInicial; 
        certificado.FechaFinal = objCertificado.CERTIFICADO_EMPRESA.FechaFinal; 
        certificado.ContraseniaKey = objCertificado.CERTIFICADO_EMPRESA.ContraseniaKey; 
        certificado.Estatus = objCertificado.CERTIFICADO_EMPRESA.Estatus; 
        certificado.idArchivoPFX = objCertificado.CERTIFICADO_EMPRESA.idArchivoPFX; 
        certificado.Predeterminado = objCertificado.CERTIFICADO_EMPRESA.Predeterminado; 
        certificado.EstatusString = objCertificado.CERTIFICADO_EMPRESA.EstatusString;        
        certificado.PredeterminadoString = objCertificado.CERTIFICADO_EMPRESA.PredeterminadoString;        
        certificado.ArchivoCer = objCertificado.CERTIFICADO_EMPRESA.ArchivoCer; 
        certificado.ArchivoKey = objCertificado.CERTIFICADO_EMPRESA.ArchivoKey;         
        certificado.CertificadoFecha = objCertificado.CERTIFICADO_EMPRESA.CertificadoFecha;        
        certificado.rfc = objCertificado.CERTIFICADO_EMPRESA.rfc; 
        certificado.nombre = objCertificado.CERTIFICADO_EMPRESA.nombre; 

        idEmpresaCertif = objCertificado.CERTIFICADO_EMPRESA.idEmpresaCertif, 
        idEmpresa = objCertificado.CERTIFICADO_EMPRESA.idEmpresa, 
        idArchivoCER = objCertificado.CERTIFICADO_EMPRESA.idArchivoCER, 
        idArchivoKEY = objCertificado.CERTIFICADO_EMPRESA.idArchivoKEY, 
        NumeroCertificado = objCertificado.CERTIFICADO_EMPRESA.NumeroCertificado, 
        FechaInicial = objCertificado.CERTIFICADO_EMPRESA.FechaInicial, 
        FechaFinal = objCertificado.CERTIFICADO_EMPRESA.FechaFinal, 
        ContraseniaKey = objCertificado.CERTIFICADO_EMPRESA.ContraseniaKey, 
        Estatus = objCertificado.CERTIFICADO_EMPRESA.Estatus, 
        idArchivoPFX = objCertificado.CERTIFICADO_EMPRESA.idArchivoPFX, 
        Predeterminado = objCertificado.CERTIFICADO_EMPRESA.Predeterminado, 
        EstatusString = objCertificado.CERTIFICADO_EMPRESA.EstatusString,        
        PredeterminadoString = objCertificado.CERTIFICADO_EMPRESA.PredeterminadoString,        
        ArchivoCer = objCertificado.CERTIFICADO_EMPRESA.ArchivoCer, 
        ArchivoKey = objCertificado.CERTIFICADO_EMPRESA.ArchivoKey,         
        CertificadoFecha = objCertificado.CERTIFICADO_EMPRESA.CertificadoFecha,        
        rfc = objCertificado.CERTIFICADO_EMPRESA.rfc, 
        nombre = objCertificado.CERTIFICADO_EMPRESA.nombre, 