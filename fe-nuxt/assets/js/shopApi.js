import axios from 'axios'

export async function request(method, url, data, auth = false) {
    const headers = {}
    try {
        const response = await window.$nuxt.$axios({
            method: method,
            url,
            data,
            headers
        })
        console.log(response)
        return response

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function getAllShop() {
    const url = process.env.GETALL_SHOP_API
    const mt = 'GET'
    return request(mt, url, '', false)

}

export async function getShopById(id) {
    const url = process.env.GETALL_SHOP_ID + "/" + id
    const mt = 'GET'
    return request(mt, url, '', false)

}

export async function updateShop(data) {
    const url = process.env.UPDATE_SHSOP
    const mt = 'POST'
    return request(mt, url, data, false)

}

export async function deleteShop(data) {
    const url = process.env.DELETE_SHOP
    const mt = 'POST'
    return request(mt, url, data, false)

}

export async function addShop(data) {
    const url = process.env.ADD_SHOP
    const mt = 'POST'
    return request(mt, url, data, false)

}