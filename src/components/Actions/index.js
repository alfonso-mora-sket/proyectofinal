import clienteApi from '../api/clienteApi'

export const crearFactura = (factura) => {
    return {
        type: 'CREAR_FACTURA',
        payload: {
            nombreCliente: factura.nombreCliente,
            cancepto:      factura.concepto,
            importe:       factura.importe,
            estado:        'facturada'
        }
    }
}

export const cancelarFactura = (factura) => {
    return {
        type: 'CANCELAR_FACTURA',
        payload: {
            nombreCliente: factura.nombreCliente,
            concepto:      factura.concepto,
            importe:       factura.importe,
            estado:        'cancelada'
        }
    }
}

export const crearNotaCredito = (notacred) => {
    return {
        type: 'CREAR_NOTACREDITO',
        payload: {
            nombreCliente: notacred.nombreCliente,
            concepto:      notacred.concepto,
            importe:       notacred.importe,
            estado:        'facturada'
        }
    }
}

export const cancelarNotaCredito = (notacred) => {
    return {
        type: 'CANCELAR_NOTACREDITO',
        payload: {
            nombreCliente: notacred.nombreCliente,
            concepto:      notacred.concepto,
            importe:       notacred.importe,
            estado:        'cancelada'
        }
    }
}

export const clienteSeleccionado = (cliente) => {
    return {
        type: 'CLIENTE_SELECCIONADO',
        payload: cliente
    }
} 

export const getClientes = () => {
    return async (dispatch, getState) => {
        const clientes = await clienteApi.get('/users')
        dispatch({
            type: 'GET_CLIENTE',
            payload: clientes.data
        })
    }
}
