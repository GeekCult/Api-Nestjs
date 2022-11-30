import { DataSource } from 'typeorm';
import { UserAuth } from './auth.entity';

export const authProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserAuth),
    inject: ['DATA_SOURCE'],
  },
];