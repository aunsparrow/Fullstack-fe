import lodash from 'lodash'
export default {

    created() {
        //_ lodash
        this.debouncedGetAnswer = lodash.debounce(this.getAnswer, 500)
    },
    data() {
        return {
            message: 'test message',
            canSee: false,
            objArr: [
                { id: 1, val: 'test1', fax: true },
                { id: 2, val: 'test2', fax: false },
                { id: 3, val: 'test3', fax: true },
            ],
            msg1: 'Text',
            msg2: String(process.env.BASE_URL),
            asdsadsad: 'dasaads',
            vbindId: 'idTest',
            linkGoogle: 'https://www.google.co.th/',
            firstName: 'Apichai',
            lastName: 'Ruttana',
            question: "",
            answer: "test",
            classHtml: {
                active: true,
                "text-danger": true
            }

        }
    },

    methods: {
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