/* eslint-disable prettier/prettier */
const configs = {
    dev: {
        BASE_URL: 'http://127.0.0.1:7000/',
        NODE_ENV: 'dev',
        GETALL_SHOP_API: 'http://127.0.0.1:7000/api/shop/getall',
        GETALL_SHOP_ID: 'http://127.0.0.1:7000/api/shop/get',
        UPDATE_SHSOP: 'http://127.0.0.1:7000/api/shop/update',
        DELETE_SHOP: 'http://127.0.0.1:7000/api/shop/delete',
        ADD_SHOP: 'http://127.0.0.1:7000/api/shop/create',
        GET_ALL_PROD: 'http://127.0.0.1:7000/api/product/getall',
        GET_ALL_CAT: 'http://127.0.0.1:7000/api/category/getall',
        ADD_PROD: 'http://127.0.0.1:7000/api/product/create',
        GET_PROD: 'http://127.0.0.1:7000/api/product/get',
        UPDATE_PROD: 'http://127.0.0.1:7000/api/product/update',
        GET_PROD_BY_SHOP: 'http://127.0.0.1:7000/api/product/get/shop',
        DELETE_PROD: 'http://127.0.0.1:7000/api/product/delete'
    },
    uat: {
        BASE_URL: 'http://localhost:3001',
        NODE_ENV: 'uat',
        GETALL_SHOP_API: 'http://127.0.0.1:7000/api/shop/getall',
        GETALL_SHOP_ID: 'http://127.0.0.1:7000/api/shop/get',
        UPDATE_SHSOP: 'http://127.0.0.1:7000/api/shop/update',
        DELETE_SHOP: 'http://127.0.0.1:7000/api/shop/delete',
        ADD_SHOP: 'http://127.0.0.1:7000/api/shop/create',
        GET_ALL_PROD: 'http://127.0.0.1:7000/api/product/getall',
        GET_ALL_CAT: 'http://127.0.0.1:7000/api/category/getall',
        ADD_PROD: 'http://127.0.0.1:7000/api/product/create',
        GET_PROD: 'http://127.0.0.1:7000/api/product/get',
        UPDATE_PROD: 'http://127.0.0.1:7000/api/product/update',
        GET_PROD_BY_SHOP: 'http://127.0.0.1:7000/api/product/get/shop',
        DELETE_PROD: 'http://127.0.0.1:7000/api/product/delete'
    },
    prod: {
        BASE_URL: 'http://localhost:3002',
        NODE_ENV: 'prod',
        GETALL_SHOP_API: 'http://127.0.0.1:7000/api/shop/getall',
        GETALL_SHOP_ID: 'http://127.0.0.1:7000/api/shop/get',
        UPDATE_SHSOP: 'http://127.0.0.1:7000/api/shop/update',
        DELETE_SHOP: 'http://127.0.0.1:7000/api/shop/delete',
        ADD_SHOP: 'http://127.0.0.1:7000/api/shop/create',
        GET_ALL_PROD: 'http://127.0.0.1:7000/api/product/getall',
        GET_ALL_CAT: 'http://127.0.0.1:7000/api/category/getall',
        ADD_PROD: 'http://127.0.0.1:7000/api/product/create',
        GET_PROD: 'http://127.0.0.1:7000/api/product/get',
        UPDATE_PROD: 'http://127.0.0.1:7000/api/product/update',
        GET_PROD_BY_SHOP: 'http://127.0.0.1:7000/api/product/get/shop',
        DELETE_PROD: 'http://127.0.0.1:7000/api/product/delete'
    }

}

const nodeEnv = process.env.NODE_ENV
module.exports = configs[nodeEnv]