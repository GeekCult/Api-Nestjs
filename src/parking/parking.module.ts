import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ParkingProviders } from './parking.providers';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
      ...ParkingProviders,
      ParkingService,
    ],
    controllers: [ParkingController]
})
export class ParkingModule {}