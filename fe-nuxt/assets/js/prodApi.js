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

export async function getAllProd() {
    const url = process.env.GET_ALL_PROD
    const mt = 'GET'
    return request(mt, url, '', false)

}

export async function getAllShop() {
    const url = process.env.GETALL_SHOP_API
    const mt = 'GET'
    return request(mt, url, '', false)

}

export async function getAllCategory() {
    const url = process.env.GET_ALL_CAT
    const mt = 'GET'
    return request(mt, url, '', false)

}

export async function AddProd(data) {
    const url = process.env.ADD_PROD
    const mt = 'POST'
    return request(mt, url, data, false)

}

export async function getProd(data) {
    const url = process.env.GET_PROD + "/" + data
    const mt = 'GET'
    return request(mt, url, data, false)

}

export async function UpdateProd(data) {
    const url = process.env.UPDATE_PROD
    const mt = 'POST'
    return request(mt, url, data, false)

}

export async function GetprodByShop(data) {
    const url = process.env.GET_PROD_BY_SHOP + "/" + data
    const mt = 'GET'
    return request(mt, url, '', false)

}

export async function DeleteProd(data) {
    const url = process.env.DELETE_PROD
    const mt = 'POST'
    return request(mt, url, data, false)

}