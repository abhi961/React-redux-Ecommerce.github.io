
const initState = {
    products : [],
    totalPrice : 0 ,
    totalQty : 0,
}
const CartReducer = (state= initState , action)=>{
    let findPro;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
            const {product, Qty} = action.payload;
            const check = state.products.find(pr=> pr.id === product.id);
            if(check){
                return state;
            }else{
                const Tprice= state.totalPrice + product.price * Qty;
                const TQty= state.totalQty + Qty;
                product.Qty = Qty;
                return {
                    ...state, products:[...state.products, product], totalPrice:Tprice , totalQty: TQty
                }
            }
            case 'INC':
               findPro= state.products.find(product=> product.id=== action.payload);
               index= state.products.findIndex(product=>product.id === action.payload);
               findPro.Qty +=1;
               state.products[index]=findPro;
               return{
                   ...state,
                   totalPrice: state.totalPrice + findPro.price , totalQty: state.totalQty+1
               }
               case 'DEC':
                findPro= state.products.find(product=> product.id=== action.payload);
                index= state.products.findIndex(product=>product.id === action.payload);
                if(findPro.Qty > 1){
                findPro.Qty -=1;
                state.products[index]=findPro;
                return{
                    ...state,
                    totalPrice: state.totalPrice - findPro.price , totalQty: state.totalQty -1
                }
                }else{
                    return state;
                }
                case 'REMOVE':
                    findPro= state.products.find(product=> product.id=== action.payload);
                    const filtered= state.products.filter(product=> product.id !== action.payload);
                    return{
                        ...state,
                        products:filtered,
                        totalPrice:state.totalPrice - findPro.price * findPro.Qty , totalQty:state.totalQty -
                        findPro.Qty 
                    }
        default: 
        return state;
    }
}
export default CartReducer;