import { DataSource } from 'typeorm';
import { Parking } from './parking.entity';
export declare const ParkingProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Parking>;
    inject: string[];
}[];
