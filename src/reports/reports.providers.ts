import { DataSource } from 'typeorm';
import { Reports } from './reports.entity';

export const ReportsProviders = [
  {
    provide: 'PARKING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Reports),
    inject: ['DATA_SOURCE'],
  },
];