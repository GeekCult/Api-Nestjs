import { Repository } from 'typeorm';
import { Parking } from './parking.entity';
export declare class ParkingService {
    private parkingRepository;
    constructor(parkingRepository: Repository<Parking>);
    findAll(): Promise<Parking[]>;
    findOne(id?: number): Promise<Parking>;
    searchLicensePlate(license_plate: string): Promise<Parking>;
    find(): Promise<string>;
    createRecord(parking: Parking): Promise<Parking>;
}
