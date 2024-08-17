import Koa, { DefaultContext, DefaultState, Context } from 'koa';
import bodyParder from 'koa-bodyparser';
import koaStatic from 'koa-static';
import log4js from 'log4js';
import Router from '@/routes';
import { config } from '@/config';

const app: Koa<DefaultContext, DefaultState> = new Koa();

// 配置静态web服务的中间件
app.use(koaStatic(__dirname + '/static'));
app.use(koaStatic(__dirname + '/public')); // koa静态资源中间件可以配置多个

// 解析请求体
app.use(bodyParder());

app.use(async (ctx: Context , next) => {
    console.log('ctx:', ctx);
    console.log('request:', ctx.request.body);
    console.log('params:', ctx.request.querystring);
    ctx.body = 'hello world';
    await next();
})

app.use(Router.routes()).use(Router.allowedMethods());

app.use(async (ctx: Context) => {
    ctx.body = {
        code: ctx.code || 500,
        msg: ctx.msg || "服务异常，请联系网站管理员",
        data: ctx.data || null
    }
})

app.listen(config.port, () => {
    console.log(`Server at http://localhost:${config.port}`);
})
