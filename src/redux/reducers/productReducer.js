
const initialState = {
    products: [
        {
            id: 1,
            title: 'produc1',
            category: 'clothing',
        },
    ]
}

export const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return { ...state, payload }

            break;

        case ActionTypes.SET_PRODUCTS:

            return { ...state, payload }

            break;

        default:
            break;
    }




}



