import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Parking } from './parking.entity';
import { ParkingService } from './parking.service';


@Controller('parking')
export class ParkingController {

    constructor(private parkingsService: ParkingService) {}
    
    //@UseGuards(JwtAuthGuard)
    //@ApiBearerAuth('JWT-auth')     
    @Get()
    findAll() {
        return this.parkingsService.findAll();
    }
    /*
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.parkingsService.findOne(id);
    } */
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.parkingsService.delete(id);
    }
    
    //@UseGuards(JwtAuthGuard)
    //@ApiBearerAuth('JWT-auth')
    @Post() 
    //@ApiOperation({ summary: 'Create cat' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    createRecord(@Body() parking: Parking): Promise<Parking> {
        return this.parkingsService.createRecord(parking);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Patch(':id')
    async edit(@Body() parking: Parking, @Param('id') id: number): Promise<Parking> {
        return this.parkingsService.save(id, parking);
    }
}
