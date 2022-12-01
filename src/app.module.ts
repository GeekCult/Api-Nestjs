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
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './common/config/database';

@Module({
    imports: [
        //ConfigModule.forRoot(),
        TypeOrmModule.forRoot(databaseConfig),
        /*
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'drconsulta',
            entities: [Company, UserAuth, Parking, Company],
            synchronize: true,
        }),*/
        
        AuthModule, CompanyModule, ParkingModule, VehicleModule, UserModule, ReportsModule
    ],
    providers: [{provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor,}]
})
export class AppModule {}