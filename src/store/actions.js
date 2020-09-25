import { ADD_COUNTER, ADD_TO_CART } from './mutationstype'
export default {
    addcart(context, payload) {
        let oldproduce = null;
        for (let item of context.state.cartlist) {
            if (item.iid === payload.iid) {
                oldproduce = item;
            }
        }
        if (oldproduce) {
            context.commit(ADD_COUNTER, oldproduce);
        } else {
            payload.count = 1;
            context.commit(ADD_TO_CART, payload);
        }
    }
}