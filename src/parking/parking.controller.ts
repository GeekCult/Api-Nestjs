import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Parking } from './parking.entity';
import { ParkingService } from './parking.service';


@Controller('parking')
export class ParkingController {

    constructor(private parkingsService: ParkingService) {}
    
    /* 
    @Get()
    findAll() {
        return this.parkingsService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.parkingsService.findOne(id);
    } */
    
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        this.parkingsService.findOne(id);
    }

    @Post() 
    //@ApiOperation({ summary: 'Create cat' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    createRecord(@Body() parking: Parking): Promise<Parking> {
        return this.parkingsService.createRecord(parking);
    }

    @Post('search') 
    //@ApiOperation({ summary: 'Create cat' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    searchRecord(@Body() parking: Parking): Promise<Parking> {
        return this.parkingsService.searchLicensePlate(parking.license_plate);
    }

    /* 

    @Patch(':id')
    async editNote(@Body() note: Note, @Param('id') id: number): Promise<Note> {
        const noteEdited = await this.notesService.editNote(id, note);
        return noteEdited;
    }

     */
}
