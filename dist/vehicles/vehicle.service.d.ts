import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
export declare class VehicleService {
    private vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    findAll(): Promise<Vehicle[]>;
    findOne(id?: number): Promise<Vehicle>;
    find(): Promise<string>;
    createRecord(vehicle: Vehicle): Promise<Vehicle>;
}
