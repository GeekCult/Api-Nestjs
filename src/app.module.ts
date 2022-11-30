import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { AuthModule } from './auth/auth.module';
import { ParkingModule } from './parking/parking.module';
import { VehicleModule } from './vehicles/vehicle.module';
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '34.95.237.156',
            port: 3306,
            username: 'root',
            password: 'root',
            database: process.env.MYSQL_DB,
            entities: [],
            synchronize: true,
        }),
        AuthModule, CompanyModule, ParkingModule, VehicleModule, UserModule, ReportsModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}