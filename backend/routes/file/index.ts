import { Context } from 'koa';
import KoaRouter from 'koa-router';
import multer from '@koa/multer';
import { config } from '@/config';

const fileRouter = new KoaRouter();

//上传文件存放路径、及文件命名
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('upload:', config.upload);
        cb(null, config.upload);
    },
    filename: function (req, file, cb) {
        let type = file.originalname.split('.')[1]
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
})

//文件上传限制
const limits = {
    fields: 10,//非文件字段的数量
    fileSize: 500 * 1024,//文件大小 单位 b
    files: 1//文件数量
}

// ts-ignore
const upload = multer({ storage, limits })

// 请求处理formData类型的文件
fileRouter.post('/upload', upload.single('file'), async (ctx: Context & { request: { file: any } }, next) => {
    console.log('file:', ctx.request.file);
    console.log('ctx.file', ctx.file);
    console.log('ctx.request.body', ctx.request.body);
    ctx.code = 200;
    ctx.data = ctx.file;
    await next();
})

export { fileRouter };