import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Upload } from './upload.entity';

@Injectable()
export class UploadRepository extends Repository<Upload> {
    constructor(private dataSource: DataSource) {
    super(
      Upload,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async findAll() {
        //return this;
        return this.find();
      }
    
}