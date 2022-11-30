import { DataSource } from 'typeorm';
import { Vehicle } from './vehicle.entity';
export declare const VehicleProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Vehicle>;
    inject: string[];
}[];
