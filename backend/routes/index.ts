import KoaRouter from 'koa-router';
import { homeRouter } from '@/routes/home';
import { fileRouter } from '@/routes/file';

const Router = new KoaRouter();

Router.use(homeRouter.routes(), homeRouter.allowedMethods());
Router.use('/file', fileRouter.routes(), fileRouter.allowedMethods());

export default Router;