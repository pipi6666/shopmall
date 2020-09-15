import { requset } from './requset'
export function gethomemultidata() {
    return requset({
        url: '/home/multidata'
    })
}

export function gethomegoods(type, page) {
    return requset({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}