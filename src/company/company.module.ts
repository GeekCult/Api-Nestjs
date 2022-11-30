import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CompanyProviders } from './company.providers';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
      ...CompanyProviders,
      CompanyService,
    ],
    controllers: [CompanyController]
})
export class CompanyModule {}