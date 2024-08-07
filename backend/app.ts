import Koa, { DefaultContext, DefaultState, Context } from 'koa';
import KoaRouter from 'koa-router';

const app: Koa<DefaultContext, DefaultState> = new Koa();

const Router = new KoaRouter();


app.use(async (ctx: Context, next) => {
    ctx.body = 'hello world';
    next();
})

Router.get('/home', async (ctx: Context) => {
    ctx.body = 'home';
})

app.use(Router.routes()).use(Router.allowedMethods());

app.listen(3000, () => {
    console.log('Server at http://localhost:3000');
})
