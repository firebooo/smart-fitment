import { Knex, knex } from 'knex';
import { config } from '@/config';

const db = knex({
    client: 'pg',
    connection: config.PG_CONN_STR,
    pool: { min: 0, max: 10 }
})

export default db;