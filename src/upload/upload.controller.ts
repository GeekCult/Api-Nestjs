import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Upload } from './upload.entity';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';


@Controller('upload')
export class UploadController {

    constructor(private uploadService: UploadService) {}
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')     
    @Get()
    @ApiOperation({ summary: 'Show all parked vehicles' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll() {
        return this.uploadService.findAll();
    }

    @Post('file_old')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        return file;
        //return this.uploadService.create(file);
    
    }

    @Post('file')
    @UseInterceptors(
        FileInterceptor('file', {
        storage: diskStorage({
            destination: 'public/img',
            filename: (req, file, cb) => {
            cb(null, file.originalname);
            },
        }),
        }),
    )
    async local(@UploadedFile() file: Express.Multer.File) {
        return {
        statusCode: 200,
        data: file.path,
        };
    }
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a parked vehicle' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.uploadService.delete(id);
    }    
    
}
