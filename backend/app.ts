import Koa, { DefaultContext, DefaultState, Context } from 'koa';
import bodyParder from 'koa-bodyparser';
import koaStatic from 'koa-static';
import { WebSocketServer } from 'ws';
import Router from '@/routes';
import { config } from '@/config';
import { logger } from '@/utils/log4js';

const app: Koa<DefaultContext, DefaultState> = new Koa();
let wss: WebSocketServer | null = null;

// 配置静态web服务的中间件
app.use(koaStatic(__dirname + '/static'));
app.use(koaStatic(__dirname + '/public')); // koa静态资源中间件可以配置多个

// 解析请求体
app.use(bodyParder());

// cors解决跨域
app.use(async (ctx: Context, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "Content-Type");
    ctx.set("Access-Control-Allow-Methods", "*");
    await next();
})

// 记录日志
app.use(async (ctx: Context, next) => {
    console.log('ctx:', ctx);
    console.log('request:', ctx.request.body);
    console.log('params:', ctx.request.querystring);
    ctx.body = 'hello world';
    logger.info(`url: ${ctx.request.url}\n`);
    await next();
})

// 路由配置
app.use(Router.routes()).use(Router.allowedMethods());

// 返回响应中间件
app.use(async (ctx: Context) => {
    ctx.body = {
        code: ctx.code || 500,
        msg: ctx.msg || "服务异常，请联系网站管理员",
        data: ctx.data || null
    }
})

app.listen(config.port, () => {
    wss = new WebSocketServer({ port: config.wsPort as number });
 
    wss.on('connection', function connection(ws) {
        ws.on('error', console.error);
      
        ws.on('message', function message(data) {
          console.log('received: ', data, data.toLocaleString());
        });

        // 关闭websocket服务
        // wss?.close();
      
        ws.send('something');
    });
    console.log(`HTTP Server at http://localhost:${config.port}`);
})
