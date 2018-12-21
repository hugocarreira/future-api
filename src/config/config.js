export default {
    env: process.env.ENV || 'dev',
    port: process.env.PORT || '8000',
    secret: process.env.SECRET || 'secreto',
    mongo: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || '27017',
        database: process.env.DATABASE || 'future',
    },
}