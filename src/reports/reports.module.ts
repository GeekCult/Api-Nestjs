import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ReportsProviders } from './reports.providers';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
      ...ReportsProviders,
      ReportsService,
    ],
    controllers: [ReportsController]
})
export class ReportsModule {}