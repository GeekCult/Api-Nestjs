import { Parking } from './parking.entity';
import { ParkingService } from './parking.service';
export declare class ParkingController {
    private parkingsService;
    constructor(parkingsService: ParkingService);
    remove(id: number): void;
    createRecord(parking: Parking): Promise<Parking>;
    searchRecord(parking: Parking): Promise<Parking>;
}
