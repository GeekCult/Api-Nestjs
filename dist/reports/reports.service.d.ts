import { Repository } from 'typeorm';
import { Reports } from './reports.entity';
export declare class ReportsService {
    private reportsRepository;
    constructor(reportsRepository: Repository<Reports>);
    findAll(): Promise<Reports[]>;
    findOne(id?: number): Promise<Reports>;
    summary(reports: Reports): Promise<(string | undefined)[]>;
}
