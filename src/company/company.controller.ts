import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
//import { LocalAuthGuard } from './auth/local-auth.guard';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Company } from './company.entity';
import { CompanyService } from './company.service';


@Controller('company')
export class CompanyController {

    constructor(private companysService: CompanyService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    
    @Get()
    findAll() {
        //return JwtAuthGuard
        return this.companysService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.companysService.findOne(id);
    }

    @Post() 
    //@ApiOperation({ summary: 'Create cat' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    createRecord(@Body() company: Company): Promise<Company> {
        return this.companysService.createRecord(company);
    }
    /*
  @Get()
  findAll() {
    return this.notesService.getNotes();
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
