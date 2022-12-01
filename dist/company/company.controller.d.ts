import { Company } from './company.entity';
import { CompanyService } from './company.service';
export declare class CompanyController {
    private companysService;
    constructor(companysService: CompanyService);
    findAll(): Promise<Company[]>;
    findOne(id: number): void;
}
