import path from 'path';

const config = {
    port: process.env.isProd ? process.env.port : 3000,
    upload: path.join(__dirname ,'/public')
}

export { config };