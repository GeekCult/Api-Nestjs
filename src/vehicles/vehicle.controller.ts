import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';


@Controller('vehicle')
export class VehicleController {

    constructor(private vehiclesService: VehicleService) {}

    @Get()
    findAll() {
        return this.vehiclesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.vehiclesService.findOne(id);
    }

    @Post() 
    //@ApiOperation({ summary: 'Create cat' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    createRecord(@Body() vehicle: Vehicle): Promise<Vehicle> {
        return this.vehiclesService.createRecord(vehicle);
    }

    /* 

    @Patch(':id')
    async editNote(@Body() note: Note, @Param('id') id: number): Promise<Note> {
        const noteEdited = await this.notesService.editNote(id, note);
        return noteEdited;
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        this.notesService.remove(id);
    } */
}
