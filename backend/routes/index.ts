import KoaRouter from 'koa-router';
import { homeRouter } from '@/routes/home';
import { fileRouter } from '@/routes/file';
import { userRouter } from './controller';

const Router = new KoaRouter();

Router.use(homeRouter.routes(), homeRouter.allowedMethods());
Router.use('/file', fileRouter.routes(), fileRouter.allowedMethods());
Router.use('/api', userRouter.routes(), userRouter.allowedMethods());

export default Router;