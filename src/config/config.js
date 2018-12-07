const config = {
    env: process.env.ENV || 'dev',
    port: process.env.PORT || '8000',
    secret: process.env.SECRET || 'secreto',
    mongo: {
        // dbuser: process.env.USER || 'user',
        // password: process.env.PASSWORD || 'pass',
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || '27017',
        database: process.env.DATABASE || 'future',
    },
};

module.exports = config;
