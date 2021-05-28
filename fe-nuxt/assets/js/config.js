/* eslint-disable prettier/prettier */
const configs = {
    dev: {
        BASE_URL: 'http://localhost:3000',
        NODE_ENV: 'dev'
    },
    uat: {
        BASE_URL: 'http://localhost:3001',
        NODE_ENV: 'uat'
    },
    prod: {
        BASE_URL: 'http://localhost:3002',
        NODE_ENV: 'prod'
    }

}

const nodeEnv = process.env.NODE_ENV
module.exports = configs[nodeEnv]