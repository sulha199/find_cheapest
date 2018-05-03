const ShopItemsReducer = (state = {shopItems :[]},action)=>{
    switch (action.type) {
        case 'SUCCESS':
            return {shopItems: sort(state.shopItems.concat(action.shopItems),action.sortType),sortType:action.sortType};

        case 'CLEAR':
            return {shopItems: []};

        default:
            return state;
    }
}

function priceAsc(obj)
{
    return obj.sort(function (a, b) {
        return a.price - b.price;
    });
}

function priceDesc(obj)
{
    return obj.sort(function (a, b) {
        return b.price - a.price;
    });
}

function sort(obj,method)
{
    if (method == 'lowest')
        return priceAsc(obj);
    else if (method == 'highest')
        return priceDesc(obj);
    else
        return obj;
}

export default ShopItemsReducer;
