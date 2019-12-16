require('dotenv').config({ path: '.env' });
const env = require('common-env')();

module.exports = {
    DATABASE: {
        HOST: env.getOrElse('MONGO_HOST', '127.0.0.1'),
        PORT: env.getOrElse('MONGO_PORT', '27017'),
        DATABASE: env.getOrElse('MONGO_DATABASE', 'code-test')
    }
}