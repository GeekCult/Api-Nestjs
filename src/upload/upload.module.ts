import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload } from './upload.entity';
import { UploadRepository } from './upload.repository';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';


@Module({
    imports: [TypeOrmModule.forFeature([Upload])],
    providers: [ UploadService, UploadRepository ],
    controllers: [UploadController],
    exports: [UploadService],
})
export class UploadModule {}