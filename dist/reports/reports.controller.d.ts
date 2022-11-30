import { Reports } from './reports.entity';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    findAll(): Promise<Reports[]>;
    summary(reports: Reports): Promise<any>;
    createRecord(reports: Reports): Promise<any>;
}
