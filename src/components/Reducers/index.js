import { combineReducers } from 'redux'

const listaInicial = [
    {
        nombreCliente: 'Alfonso', 
        importe: 100,
        estado: 'facturada'
    }, 
    {
        nombreCliente: 'Jorge', 
        importe: 200,
        estado: 'facturada'
    },       
    {
        nombreCliente: 'Rosario', 
        importe: 300,
        estado: 'facturada'
    },  
    {
        nombreCliente: 'Carlos', 
        importe: 400,
        estado: 'facturada'
    }        	
]


const facturaReducer = (listaFactura = listaInicial, action)  => {
    switch(action.type){
        case "CREAR_FACTURA":
            return [...listaFactura, action.payload]
        case "ELIMINAR_FACTURA":
            return [listaFactura.filter((factura) => { return factura.nombreCliente !== action.payload }), 
                    Object.assign({},listaFactura[action.index], 
                       {nombreCliente: action.nombreCliente, 
                        importe:       action.importe,
                        estado:        'cancelada'})]
        default:
            return listaFactura
    }
}

const totalfacturaReducer = (impTotalFactura = 1000, action) => {
    switch(action.type){
        case "CREAR_FACTURA":
            return impTotalFactura + action.payload.importe
        case "ELIMINAR_FACTURA":
            return impTotalFactura - action.payload.importe
        default:
            return impTotalFactura
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

const notascreditoReducer = (listaNotasCredito = [], action) => {
    switch(action.type){
        case "CREAR_NOTACREDITO":
            return [...listaNotasCredito, action.payload]
        case "ELIMINAR_NOTACREDITO":
                return listaNotasCredito.filter((notascredito) => { return notascredito.nombreCliente !== action.payload })
        default:
            return listaNotasCredito
    }
}

const totalnotascreditoReducer = (impTotalNotasCredito = 0, action) => {
    switch(action.type){
        case "CREAR_NOTACREDITO":
            return impTotalNotasCredito + action.payload.importe
        case "ELIMINAR_NOTACREDITO":
            return impTotalNotasCredito - action.payload.importe
        default:
            return impTotalNotasCredito
    }
}

export default combineReducers({
    listaDeFacturas:     facturaReducer,
    totalFactura:        totalfacturaReducer,
    totalBalance:        balanceReducer,
    listaDeNotasCredito: notascreditoReducer,
    totalNotasCredito:   totalnotascreditoReducer
})
