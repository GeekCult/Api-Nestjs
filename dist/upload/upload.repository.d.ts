import { DataSource, Repository } from 'typeorm';
import { Upload } from './upload.entity';
export declare class UploadRepository extends Repository<Upload> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<Upload[]>;
}
