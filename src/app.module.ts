import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { Company } from './company/company.entity';
import { UserAuth } from './auth/auth.entity';
import { Parking } from './parking/parking.entity';
import { User } from './user/user.entity';
import { Vehicle } from './vehicles/vehicle.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { ParkingModule } from './parking/parking.module';
import { VehicleModule } from './vehicles/vehicle.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),        
        AuthModule, CompanyModule, ParkingModule, VehicleModule, UserModule, UploadModule, ReportsModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..'),
        }),
        
    ],
    //providers: [{provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor,}]
})
export class AppModule {}