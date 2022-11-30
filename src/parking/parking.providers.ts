import { DataSource } from 'typeorm';
import { Parking } from './parking.entity';

export const ParkingProviders = [
  {
    provide: 'PARKING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Parking),
    inject: ['DATA_SOURCE'],
  },
];