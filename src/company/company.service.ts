// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {

    constructor(
        @Inject('COMPANY_REPOSITORY')
            private companysRepository: Repository<Company>,
        ) {}

    async findAll(): Promise<Company[]> {
        return this.companysRepository.find();
    }

    async findOne(id: number = 1): Promise<Company> {
        //return {name: "Pera", id: id}
        return this.companysRepository.findOneBy({ id: id });
    }

    async find(): Promise<string> {
        return "Hello";
    }

    async findOneByEmail(companyname: string) {
        return this.companyRepository.findOneBy({ email: companyname });
    }

    async createRecord(company: Company){
        //return companys;
        return this.companysRepository.save(company);
    }

}

