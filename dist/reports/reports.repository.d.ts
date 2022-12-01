import { DataSource, Repository } from 'typeorm';
import { Reports } from './reports.entity';
import { ReportFilterQuery } from './reports.service';
export declare class ReportsRepository extends Repository<Reports> {
    private dataSource;
    constructor(dataSource: DataSource);
    summary(query: ReportFilterQuery): Promise<any>;
    summaryByPeriod(query: ReportFilterQuery): Promise<any>;
    findAll(): Promise<Reports[]>;
    findAll3(): Promise<any>;
    prepareQuery(query: ReportFilterQuery): string;
    prepareQuery2(id: number, year: string, month: string, day: string, hour: string): string;
}
