import { DataSource } from 'typeorm';
import { Reports } from './reports.entity';
export declare const ReportsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Reports>;
    inject: string[];
}[];
