import path from 'path';

const isProd = process.env.NODE_DEV === 'development';

const config = {
    port: isProd ? process.env.port : 3000,
    wsPort: isProd ? process.env.wsPort : 3001,
    upload: path.join(__dirname ,'/public'),
    // pg://用户名:密码@地址/数据库名称
    PG_CONN_STR: `pg://postgres:postgres@localhost/postgres`
}

export { config };