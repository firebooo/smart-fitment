import { Context } from 'koa';
import KoaRouter from 'koa-router';
import { Users } from '@/db/types/users';
import { config } from '@/config';
import db from '@/db/knex';
import md5 from 'md5';

const userRouter = new KoaRouter();

userRouter.get('/users', async (ctx: Context, next) => {
    console.log('md5:', md5('avbaksndklasndaslnklfgjnaslkdjaskldjsl'));
    // const users = await db<Users>('users').select('*').where('name', '=', 'zhangsan');
    let users = null;
    try{
        users = await db.raw('select exists(select 1 from users where name = ?)', 'zhangsan');
    }catch(e){
        console.log('e:', e);
        await next();
        return;
    }
    console.log('users:', users);
    ctx.code = 200;
    ctx.msg = 'success';
    ctx.data = users;
    await next();
})

userRouter.get('/users/:id', async (ctx: Context, next) => {
    console.log('ctx:', ctx, 'id:', ctx.params.id);
})

userRouter.get('/status', async(ctx: Context, next) => {
    // ctx.status = 500;
    ctx.code = 500;
    ctx.msg = 'aaa';
    ctx.data = null;
    await next();
})

export { userRouter };