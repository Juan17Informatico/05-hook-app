

export const todoReducer = (initialState = [], action) => {

    switch ( action.type ) {
        case 'ABC':
            throw new Error('Actiob.type = ABC no esta implementada'); 
    
        default:
            return initialState; 
    }

}