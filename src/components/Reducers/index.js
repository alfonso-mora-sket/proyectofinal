import { combineReducers } from 'redux'

const listaInicial = [
    {
        name: 'Manuel', 
        amount: 20
    }, 
    {
        name: 'Luis', amount: 100
    }        
]

const polizaReducer = (listaPoliza= listaInicial, action) => {
    switch(action.type){
        case "CREAR_POLIZA":
            return [...listaPoliza, action.payload]
        case "ELIMINAR_POLIZA":
            return listaPoliza.filter((policy) => { return policy.name !== action.payload })
        default:
            return listaPoliza
    }
}

const totalPolizaReducer = (importeTotalPol = 120, action) => {
    switch(action.type){
        case "CREAR_POLIZA":
            return importeTotalPol + action.payload.amount
        case "ELIMINAR_POLIZA":
            return importeTotalPol - action.payload.amount
        default:
            return importeTotalPol
    }
}

const finanzasReducer = (importeTotalFin = 120, action) => {
    switch(action.type){
        case "CREAR_POLIZA":
            return importeTotalFin + action.payload.amount
        case "CREAR_RECLAMO":
            return importeTotalFin - action.payload.amount
        default:
            return importeTotalFin
    }
}

const reclamosReducer = (listaReclamos = [], action) => {
    switch(action.type){
        case "CREAR_RECLAMO":
            return [...listaReclamos, action.payload]
        case "ELIMINAR_RECLAMO":
                return listaReclamos.filter((claim) => { return claim.name !== action.payload })
        default:
            return listaReclamos
    }
}

const totalReclamosReducer = (importeTotalRec = 0, action) => {
    switch(action.type){
        case "CREAR_RECLAMO":
            return importeTotalRec + action.payload.amount
        case "ELIMINAR_RECLAMO":
            return importeTotalRec - action.payload.amount
        default:
            return importeTotalRec
    }
}

export default combineReducers({
    listaDePolizas:  polizaReducer,
    totalPoliza:     totalPolizaReducer,
    totalFinanzas:   finanzasReducer,
    listaDeReclamos: reclamosReducer,
    totalReclamos:   totalReclamosReducer
})
