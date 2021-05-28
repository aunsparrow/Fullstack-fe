import lodash from 'lodash'
export default {

    created() {
        //_ lodash
        this.debouncedGetAnswer = lodash.debounce(this.getAnswer, 500)
    },
    data() {
        return {
            fields: [{
                    key: 'shopId',
                    hide: true
                },
                {
                    key: 'shopName',
                    label: 'Name',
                    sortable: true
                },
                {
                    key: 'shopDetail',
                    label: 'Detail',
                    sortable: true
                },
                {
                    key: 'actions',
                    label: 'actions',
                    // Variant applies to the whole column, including the header and footer
                }
            ],
            shops: [
                { shopId: "shop1", shopName: "shop1", shopDetail: ".........shop1" },
                { shopId: "shop2", shopName: "shop2", shopDetail: ".........shop2" },
                { shopId: "shop3", shopName: "shop3", shopDetail: ".........shop3" },
                { shopId: "shop4", shopName: "shop4", shopDetail: ".........shop4" },
                { shopId: "shop5", shopName: "shop5", shopDetail: ".........shop5" },
                { shopId: "shop6", shopName: "shop6", shopDetail: ".........shop6" },
                { shopId: "shop7", shopName: "shop7", shopDetail: ".........shop7" }
            ],
            canSee: false,
            objArr: [
                { id: 1, val: 'test1', fax: true },
                { id: 2, val: 'test2', fax: false },
                { id: 3, val: 'test3', fax: true },
            ],
            infoShop: {
                id: 'info-shop',
                name: '',
                detail: ''
            },

        }
    },

    methods: {
        clickInfo(data, button) {
            console.log('process', data)
            this.infoShop.name = "Shop name:" + data.shopName
            this.infoShop.detail = "Detail:" + data.shopDetail
            this.$root.$emit('bv::show::modal', this.infoShop.id, button)
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
        //computed
        //รับค่าไม่ได้ แสดงอย่างเดียวถ้าอยากให้รับค่าได้ไปใช้ methods || update
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
    }


}