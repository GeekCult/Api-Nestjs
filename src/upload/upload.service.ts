// @ts-nocheck
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { UploadRepository } from './upload.repository';
import { Upload } from './upload.entity';

@Injectable()
export class UploadService {

    constructor(
        private uploadRepository: UploadRepository<Upload>,
    ){}

    async findAll(): Promise<Upload[]> {
        return this.uploadRepository.find();
    }

    async get(): Promise<Upload[]> {
    return this.uploadRepository.find();
    }
    
    async create(upload: Upload): Promise<Upload> {
    return this.uploadRepository.save(upload);
    }

    async getFile(id: number): Promise<Upload> {
    return this.uploadRepository.findOneBy({ id });
    }

    async delete(id: number): Promise<void> {
    await this.uploadRepository.delete(id);
    }
    

}

