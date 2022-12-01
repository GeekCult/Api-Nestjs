import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
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

    @Get('summary') 
    summary(@Query() query: any){
        return this.reportsService.summary(query);
    }
    
    @Get('summary-by-period') 
    summaryByPeriod(@Query() query: any){
        return this.reportsService.summaryByPeriod(query);
    }


}