import lodash from 'lodash'
import * as requestApi from './shopApi'
export default {

    created() {
        //_ lodash
        this.debouncedGetAnswer = lodash.debounce(this.getAnswer, 500)
    },
    data() {
        return {
            fields: [{
                    key: 'shop_name',
                    label: 'ชื่อร้าน',
                    sortable: true
                },
                {
                    key: 'actions',
                    label: 'จัดการ',
                    // Variant applies to the whole column, including the header and footer
                }
            ],
            shops: [],
            canSee: false,
            objArr: [
                { id: 1, val: 'test1', fax: true },
                { id: 2, val: 'test2', fax: false },
                { id: 3, val: 'test3', fax: true },
            ],
            infoShop: {
                id: 'info-shop',
                name: '',
                detail: '',
                shopInfo: {
                    shop_name: '',
                    tel: '',
                    address: ''
                }
            },
            editShop: {
                id: 'edit-shop',
                name: '',
                detail: '',
                shopInfo: {
                    shop_id: '',
                    shop_name: '',
                    tel: '',
                    address: ''
                }
            },
            deleteShop: {
                id: 'delete-shop',
                name: '',
                detail: '',
                shopInfo: {
                    shop_id: '',
                }
            },
            addShop: {
                id: 'add-shop',
                name: '',
                detail: '',
                shopInfo: {
                    shop_name: '',
                    tel: '',
                    address: ''
                }
            },

        }
    },

    methods: {
        async clickAddShop(button) {
            console.log(this.addShop.shopInfo)
            const addShop = await requestApi.addShop(this.addShop.shopInfo)
            this.addShop.shopInfo.shop_name = ''
            this.addShop.shopInfo.tel = ''
            this.addShop.shopInfo.address = ''
            const getShops = await requestApi.getAllShop()
            this.shops = getShops.data.data
            this.$root.$emit('bv::hide::modal', this.addShop.id, button)
        },
        async clickAdd(button) {
            this.$root.$emit('bv::show::modal', this.addShop.id, button)
        },
        async clickInfo(data, button) {
            const getShop = await requestApi.getShopById(data.shop_id)
            this.infoShop.shopInfo = getShop.data.data
            this.$root.$emit('bv::show::modal', this.infoShop.id, button)
        },
        async clickEdit(data, button) {
            const getShop = await requestApi.getShopById(data.shop_id)
            this.editShop.shopInfo = getShop.data.data
            this.$root.$emit('bv::show::modal', this.editShop.id, button)
        },
        async clickEditShop(button) {
            const updateShop = await requestApi.updateShop(this.editShop.shopInfo)
            this.editShop.shopInfo = updateShop.data.data
            const getShops = await requestApi.getAllShop()
            this.shops = getShops.data.data
            this.$root.$emit('bv::hide::modal', this.editShop.id, button)
        },
        async clickDelete(data, button) {
            this.deleteShop.shopInfo.shop_id = data.shop_id
            this.deleteShop.name = data.shop_name
            this.$root.$emit('bv::show::modal', this.deleteShop.id, button)
        },
        async clickDeleteOk(button) {
            const deleteShop = await requestApi.deleteShop(this.deleteShop.shopInfo)
            console.log(deleteShop)
            const getShops = await requestApi.getAllShop()
            this.shops = getShops.data.data
            this.$root.$emit('bv::hide::modal', this.deleteShop.id, button)
        },
        async clickDeleteCancel(button) {
            this.$root.$emit('bv::hide::modal', this.deleteShop.id, button)
        },
        resetInfoModal() {
            this.infoShop.name = ''
            this.infoShop.detail = ''
        },
        clickConsole() {
            console.log('process', process.env.BASE_URL)
            console.log('env', process.env.NODE_ENV)
        },
        getAnswer() {
            if (!this.question.includes('?')) {
                this.answer = 'gg wp'
            } else {
                this.answer = '......'
                this.$axios.get('https://yesno.wtf/api')
                    .then((response) => {
                        this.answer = lodash.capitalize(response.data.answer)
                    })
                    .catch((error) => {
                        this.answer = 'Error! Could not reach the API. ' + error
                    })
            }
        }
    },

    computed: {
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(val) {
                let name = val.split(' ')
                this.firstName = name[0]
                this.lastName = name[name.length - 1]
            },
        },
        nodeEnv() {
            return (this.msg1 = String(process.env.NODE_ENV))
        },
    },

    watch: {
        question(newQ, oldQ) {
            this.answer = 'w8'
            this.debouncedGetAnswer()
        }
    },

    async mounted() {
        const getShops = await requestApi.getAllShop()
        this.shops = getShops.data.data
    },

    /*updated() {
        console.log('updated')
        const getShops = await requestApi.getAllShop()
        this.shops = getShops.data.data
    }*/


}