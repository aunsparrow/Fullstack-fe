const config = require('./assets/js/config.js')

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'fe-nuxt',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/main.css',
        '~/assets/css/mainHeader.css',
        '~/assets/css/mainFooter.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            plugins: [
                ['@babel/plugin-proposal-private-methods', { loose: true }]
            ]
        }
    },

    env: {
        BASE_URL: config.BASE_URL,
        NODE_ENV: config.NODE_ENV,
        GETALL_SHOP_API: config.GETALL_SHOP_API,
        GETALL_SHOP_ID: config.GETALL_SHOP_ID,
        UPDATE_SHSOP: config.UPDATE_SHSOP,
        DELETE_SHOP: config.DELETE_SHOP,
        ADD_SHOP: config.ADD_SHOP,
        GET_ALL_PROD: config.GET_ALL_PROD,
        GET_ALL_CAT: config.GET_ALL_CAT,
        ADD_PROD: config.ADD_PROD,
        GET_PROD: config.GET_PROD,
        UPDATE_PROD: config.UPDATE_PROD,
        GET_PROD_BY_SHOP: config.GET_PROD_BY_SHOP,
        DELETE_PROD: config.DELETE_PROD
    },
}