import { requset } from './requset'
export function getdetail1(iid) {
    return requset({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getrecommend() {
    return requset({
        url: '/recommend',
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

export class Shop {
    constructor(shopInfo) {
        this.fans = shopInfo.cFans;
        this.goodscount = shopInfo.cGoods;
        this.sells = shopInfo.cSells;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.logo = shopInfo.shopLogo;
    }
}

export class goodsparams {
    constructor(info, rule) {
        this.image = info.images ? info.image[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}