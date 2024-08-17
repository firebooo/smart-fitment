interface multerFile{
    originalname: string
    fieldname: string
}

function callback(params: any, name: string): void;

interface multerParams{
    destination(req: any, file: multerFile, cb: callback): void
    filename(req: any, file: multerFile, cb: callback): void
}

declare module '@koa/multer'{
    export function diskStorage(obj: multerParams): void;
    export function multer(obj: any): void;
}

// declare function multer(params: any): void;

// export default multer;