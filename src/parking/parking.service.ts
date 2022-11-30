// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Parking } from './parking.entity';

@Injectable()
export class ParkingService {

    constructor(
        @Inject('PARKING_REPOSITORY')
            private parkingRepository: Repository<Parking>,
        ) {}

    async findAll(): Promise<Parking[]> {
        return this.parkingRepository.find();
    }

    async findOne(id: number = 1): Promise<Parking> {
        //return {name: "Pera", id: id}
        return this.parkingRepository.findOneBy({ id: id });
    }

    async searchLicensePlate(license_plate: string): Promise<Parking> {
        //return {name: "Pera", id: id}
        return this.parkingRepository.findOne({ license_plate: license_plate });
    }

    async find(): Promise<string> {
        return "Hello";
    }

    async createRecord(parking: Parking){
        //return parking;
        return this.parkingRepository.save(parking);
    }

}

