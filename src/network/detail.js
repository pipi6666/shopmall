import { requset } from './requset'
export function getdetail1(iid) {
    return requset({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = shopInfo.services;
    }
}