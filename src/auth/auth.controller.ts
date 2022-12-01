import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { UserAuth } from './auth.entity';

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}
        
    @Post('login')
    async login(@Body() user: UserAuth) {
        return this.authService.validateUser(user);
    }
    
    /*
    @Get()
    findAll() {
        return this.authService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.authService.findOne(id);
    }

    
    
    @Post('email')
    async email(@Body() user: UserEmailAuth) {
        return this.authService.findOneBy(user.email)
    } */
}