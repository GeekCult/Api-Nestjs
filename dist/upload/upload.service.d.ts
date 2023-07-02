import { UploadRepository } from './upload.repository';
import { Upload } from './upload.entity';
export declare class UploadService {
    private uploadRepository;
    constructor(uploadRepository: UploadRepository<Upload>);
    findAll(): Promise<Upload[]>;
    get(): Promise<Upload[]>;
    create(upload: Upload): Promise<Upload>;
    getFile(id: number): Promise<Upload>;
    delete(id: number): Promise<void>;
}
