/// <reference types="multer" />
import { Upload } from './upload.entity';
import { UploadService } from './upload.service';
export declare class UploadController {
    private uploadService;
    constructor(uploadService: UploadService);
    findAll(): Promise<Upload[]>;
    uploadFile(file: Express.Multer.File): Express.Multer.File;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
    remove(id: number): Promise<void>;
}
