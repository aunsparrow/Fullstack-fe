import lodash from 'lodash'
import * as requestApi from './prodApi'
export default {

    data() {
        return {
            fields: [{
                    key: 'category.category_name',
                    label: 'หมวดหมู',
                    sortable: true
                },
                {
                    key: 'product_name',
                    label: 'สินค้า',
                    sortable: true
                },
                {
                    key: 'product_price',
                    label: 'ราคา',
                    sortable: true
                },
                {
                    key: 'actions',
                    label: 'จัดการ',
                    // Variant applies to the whole column, including the header and footer
                }
            ],
            products: [],
            addProd: {
                id: 'add-prod',
                name: '',
                detail: '',
                prodInfo: {
                    product_name: '',
                    product_detail: '',
                    product_unit: '',
                    product_price: '',
                    shop_id: '',
                    category_id: ''
                }
            },
            updateProd: {
                id: 'update-prod',
                name: '',
                detail: '',
                prodInfo: {
                    product_id: '',
                    product_name: '',
                    product_detail: '',
                    product_unit: '',
                    product_price: '',
                    shop_id: '',
                    category_id: ''
                }
            },
            ddShop: [],
            ddShops: {
                id: 'dd-shop',
                name: 'เลือกร้าน'
            },
            ddCategory: [],
            ddCategories: {
                id: 'dd-category',
                name: 'เลือกหมวดหมู่'
            },
            prodInfos: {
                id: 'prod-info',
                name: '',
                prod: {
                    product_name: '',
                    product_price: '',
                    product_detail: '',
                    product_price: '',
                    product_unit: '',
                    category: {
                        category_id: '',
                        category_name: ''
                    }
                }
            },
            prodUpdate: {
                id: 'update-info',
                name: '',
                prod: {
                    product_id: '',
                    product_name: '',
                    product_price: '',
                    product_detail: '',
                    product_price: '',
                    product_unit: '',
                    category_id: '',
                    category: {
                        category_id: '',
                        category_name: ''
                    }
                }
            },
            filterPord: {
                product_id: ''
            },
            deleteProd: {
                id: 'delete-prod',
                name: '',
                productInfo: {
                    product_id: '',
                }
            },
        }
    },

    methods: {
        async clickAdd(button) {
            this.$root.$emit('bv::show::modal', this.addProd.id, button)
        },
        async clickDdShop(data, even) {
            this.ddShops.name = data.shop_name
            this.addProd.prodInfo.shop_id = data.shop_id

        },
        async clickDdCategory(data, even) {
            this.ddCategories.name = data.category_name
            this.addProd.prodInfo.category_id = data.category_id

        },
        async clickAddProd(button) {
            this.addProd.prodInfo.product_price = parseFloat(this.addProd.prodInfo.product_price)
            const updateProd = await requestApi.AddProd(this.addProd.prodInfo)
            this.addProd.prodInfo.shop_id = ''
            this.addProd.prodInfo.category_id = ''
            this.addProd.prodInfo.product_name = ''
            this.addProd.prodInfo.product_detail = ''
            this.addProd.prodInfo.product_price = ''
            this.addProd.prodInfo.product_unit = ''
            this.ddCategories.name = 'เลือกหมวดหมู่'
            const getAllProd = await requestApi.getAllProd()
            this.products = getAllProd.data.data
            this.$root.$emit('bv::hide::modal', this.addProd.id, button)
        },
        async clickInfo(data, even) {
            const getProd = await requestApi.getProd(data.product_id)
            this.prodInfos.prod = getProd.data.data
            this.$root.$emit('bv::show::modal', this.prodInfos.id, even)

        },
        async clickEdit(data, even) {
            const getProd = await requestApi.getProd(data.product_id)
            this.prodUpdate.prod = getProd.data.data
            this.$root.$emit('bv::show::modal', this.prodUpdate.id, even)

        },
        async clickEditProd(even) {
            this.prodUpdate.prod.product_price = parseFloat(this.prodUpdate.prod.product_price)
            this.prodUpdate.prod.category_id = this.addProd.prodInfo.category_id
            const updateProd = await requestApi.UpdateProd(this.prodUpdate.prod)
            this.addProd.prodInfo.category_id = ''
            this.ddCategories.name = 'เลือกหมวดหมู่'
            const getAllProd = await requestApi.getAllProd()
            this.products = getAllProd.data.data
            this.$root.$emit('bv::hide::modal', this.prodUpdate.id, even)
        },
        async clickFilter(data, even) {
            this.ddShops.name = data.shop_name
            const getProd = await requestApi.GetprodByShop(data.shop_id)
            console.log("5555", data, getProd)
            this.products = getProd.data.data

        },
        async clickDelete(data, button) {
            this.deleteProd.productInfo.product_id = data.product_id
            this.deleteProd.name = data.product_name
            this.$root.$emit('bv::show::modal', this.deleteProd.id, button)
        },
        async clickDeleteOk(button) {
            const deleteProd = await requestApi.DeleteProd(this.deleteProd.productInfo)
            const getProd = await requestApi.getAllProd()
            this.products = getProd.data.data
            this.$root.$emit('bv::hide::modal', this.deleteProd.id, button)
        },
        async clickDeleteCancel(button) {
            this.$root.$emit('bv::hide::modal', this.deleteProd.id, button)
        },
    },

    computed: {

    },

    watch: {

    },

    async mounted() {
        const getAllProd = await requestApi.getAllProd()
        this.products = getAllProd.data.data
        const getAllShop = await requestApi.getAllShop()
        this.ddShop = getAllShop.data.data
        const getAllCat = await requestApi.getAllCategory()
        this.ddCategory = getAllCat.data.data

    },

    /*updated() {
        console.log('updated')
        const getShops = await requestApi.getAllShop()
        this.shops = getShops.data.data
    }*/


}