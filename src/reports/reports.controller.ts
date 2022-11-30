import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Reports } from './reports.entity';
import { ReportsService } from './reports.service';


@Controller('reports')
export class ReportsController {

    constructor(private reportsService: ReportsService) {}
    
    @Get()
    findAll() {
        return this.reportsService.findAll();
    }
    
    @Post('summary') 
    summary(@Body() reports: Reports): Promise<any> {
        return this.reportsService.summary(reports);
    }

    @Post('summary-by-hours') 
    createRecord(@Body() reports: Reports): Promise<any> {
        return this.reportsService.summary(reports);
    }

}