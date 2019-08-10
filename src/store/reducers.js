import {combineReducers} from 'redux'

const initialState = {
    cart: [],
    cost: 0
}

function cart(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            let sum = state.cost + action.item.price
            return Object.assign({}, state, {
                cart: [
                    ...state.cart,
                    {
                        name: action.item.name,
                        price: action.item.price,
                        id: action.item.id
                    }
                ],
                cost: sum
            })
        case
        'REMOVE_ITEM'
        :
            let cartNow = state.cart
            let costNow = state.cost
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.item.id) {
                    let minus = cartNow.splice(i, 1)
                    costNow -= minus[0].price
                    break
                }
            }
            return Object.assign({}, state, {
                cart: cartNow,
                cost: costNow
            })
        default:
            return state
    }
}

export default combineReducers({
    cart
})