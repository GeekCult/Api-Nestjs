import { Repository } from 'typeorm';
import { Company } from './company.entity';
export declare class CompanyService {
    private companysRepository;
    constructor(companysRepository: Repository<Company>);
    findAll(): Promise<Company[]>;
    findOne(id?: number): Promise<Company>;
    find(): Promise<string>;
    findOneByEmail(companyname: string): Promise<any>;
    createRecord(company: Company): Promise<Company>;
}
