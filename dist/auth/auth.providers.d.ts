import { DataSource } from 'typeorm';
import { UserAuth } from './auth.entity';
export declare const authProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UserAuth>;
    inject: string[];
}[];
