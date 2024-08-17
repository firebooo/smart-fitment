import { Context } from 'koa';
import KoaRouter from 'koa-router';

const homeRouter = new KoaRouter();

homeRouter.get('/home', async (ctx: Context) => {
    ctx.body = 'home';
})

export { homeRouter };
