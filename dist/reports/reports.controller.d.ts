import { Reports } from './reports.entity';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    findAll(): Promise<Parking[]>;
    summary(query: any): Promise<Reports[]>;
    summaryByPeriod(query: any): Promise<Reports[]>;
}
