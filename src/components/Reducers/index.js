import { combineReducers } from 'redux'

const listaInicial = [
    {
        nombreCliente: 'Alfonso',
        concepto: 'Domine JavaScrip',
        importe: 100,
        estado: 'facturada'
    }, 
    {
        nombreCliente: 'Jorge',
        concepto: 'HTML, JavaScript y CSS',
        importe: 200,
        estado: 'facturada'
    },       
    {
        nombreCliente: 'Rosario',
        concepto: 'PHP y MySQL Editorial',
        importe: 300,
        estado: 'facturada'
    },  
    {
        nombreCliente: 'Carlos',
        concepto: 'Visual Studio .Net',
        importe: 400,
        estado: 'facturada'
    }        	
]

const facturaReducer = (listaFactura = listaInicial, action)  => {
    switch(action.type){
        case "CREAR_FACTURA":
            return [...listaFactura, action.payload]
        case "CANCELAR_FACTURA":
//            return [listaFactura.filter((factura) => { return factura.nombreCliente !== action.payload }), 
//                    Object.assign({},listaFactura[action.index], 
//                       {nombreCliente: action.nombreCliente, 
//                        importe:       action.importe,
//                        estado:        'cancelada'})]

            return listaFactura.map((factura) => { 
                    if(factura.nombreCliente === action.payload.nombreCliente) {
                        return factura.estado = 'cancelada'
                   }
                   else return factura
               })
//                    return listaFactura.filter((factura) => { return factura.nombreCliente !== action.payload })
        default:
            return listaFactura
    }
}

const notascreditoReducer = (listaNotasCredito = [], action) => {
    switch(action.type){
        case "CREAR_NOTACREDITO":
            return [...listaNotasCredito, action.payload]
        case "CANCELAR_NOTACREDITO":
            return listaNotasCredito.map((notascredito) => { 
                if(notascredito.nombreCliente === action.payload.nombreCliente) {
                    return notascredito.estado = 'cancelada'
               }
               else return notascredito
           })
       default:
            return listaNotasCredito
    }
}

const totalfacturaReducer = (impTotalFactura = 1000, action) => {
    switch(action.type){
        case "CREAR_FACTURA":
            return impTotalFactura + action.payload.importe
        case "CANCELAR_FACTURA":
            return impTotalFactura - action.payload.importe
        default:
            return impTotalFactura
    }
}

const totalnotascreditoReducer = (impTotalNotasCredito = 0, action) => {
    switch(action.type){
        case "CREAR_NOTACREDITO":
            return impTotalNotasCredito + action.payload.importe
        case "CANCELAR_NOTACREDITO":
            return impTotalNotasCredito - action.payload.importe
        default:
            return impTotalNotasCredito
    }
}

const balanceReducer = (impTotalBalance = 1000, action) => {
    switch(action.type){
        case "CREAR_FACTURA":
            return impTotalBalance + action.payload.importe
        case "CREAR_NOTACREDITO":
            return impTotalBalance - action.payload.importe
        default:
            return impTotalBalance
    }
}


const clienteSeleccionadoReducer = (clienteSeleccionado = null, action) => {
    if(action.type === 'CLIENTE_SELECCIONADO'){
        return action.payload
    }
    else{
        return clienteSeleccionado
    }
}
const clienteReducers = (clientes = [], action) => {
    switch(action.type){
        case 'GET_CLIENTE':
            return action.payload
        default:
            return clientes
    }
}

export default combineReducers({
    listaDeFacturas:     facturaReducer,
    totalFactura:        totalfacturaReducer,
    listaDeNotasCredito: notascreditoReducer,
    totalNotasCredito:   totalnotascreditoReducer,
    totalBalance:        balanceReducer,
    clienteSeleccionado: clienteSeleccionadoReducer,
    clientes:            clienteReducers
})
