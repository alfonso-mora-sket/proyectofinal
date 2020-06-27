export const crearPoliza = (name, amount) => {
    return {
        type: 'CREAR_POLIZA',
        payload: {
            name: name,
            amount: amount
        }
    }
}

export const eliminarPoliza = (name) => {
    return {
        type: 'ELIMINAR_POLIZA',
        payload: name
    }
}

export const crearReclamo = (information) => {
    return {
        type: 'CREAR_RECLAMO',
        payload: {
            name: information.name,
            amount: information.amount
        }
    }
}

export const eliminarReclamo = (name) => {
    return {
        type: 'ELIMINAR_RECLAMO',
        payload: name
    }
}