export const crearFactura = (nombreCliente, importe) => {
    return {
        type: 'CREAR_FACTURA',
        payload: {
            nombreCliente: nombreCliente,
            importe: importe,
            estado:  'facturada'
        }
    }
}

export const eliminarFactura = (nombreCliente, importe, estado) => {
    return {
        type: 'ELIMINAR_FACTURA',
        payload: {
            nombreCliente: nombreCliente,
            importe: importe,
            estado:  estado
        }
    }
}

export const crearNotaCredito = (notas) => {
    return {
        type: 'CREAR_NOTACREDITO',
        payload: {
            nombreCliente: notas.nombreCliente,
            importe: notas.importe
        }
    }
}

export const eliminarNotaCredito = (nombreCliente) => {
    return {
        type: 'ELIMINAR_NOTACREDITO',
        payload: nombreCliente
    }
}