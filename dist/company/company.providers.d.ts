import { DataSource } from 'typeorm';
import { Company } from './company.entity';
export declare const CompanyProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Company>;
    inject: string[];
}[];
