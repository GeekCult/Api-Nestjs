import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { VehicleProviders } from './vehicle.providers';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
      ...VehicleProviders,
      VehicleService,
    ],
    controllers: [VehicleController]
})
export class VehicleModule {}