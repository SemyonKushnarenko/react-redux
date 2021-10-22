const initialState = {
    menu: [],
    itemsInCart: [],
    loading: true,
    error: false,
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            }
        case 'ADDED':
            const id = action.payload;
            
            const itemInd = state.itemsInCart.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.itemsInCart.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
                return {
                    ...state, 
                    itemsInCart: [
                        ...state.itemsInCart.slice(0, itemInd),
                        newItem,
                        ...state.itemsInCart.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            } 
            
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };
            
            return {
                ...state,
                itemsInCart: [
                    ...state.itemsInCart,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
            
        case 'REMOVED':
            const remItem = state.itemsInCart.find(item => item.id === action.payload)

            return {
                ...state,
                itemsInCart: state.itemsInCart.filter(item => item !== remItem),
                totalPrice: state.totalPrice - remItem.price * remItem.qtty
            }
        default:
            return state
    }
}

export default reducer