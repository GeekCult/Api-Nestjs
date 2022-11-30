import { DataSource } from 'typeorm';
import { User } from './user.entity';
export declare const UserProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<User>;
    inject: string[];
}[];
