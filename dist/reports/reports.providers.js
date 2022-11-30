"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsProviders = void 0;
const reports_entity_1 = require("./reports.entity");
exports.ReportsProviders = [
    {
        provide: 'PARKING_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(reports_entity_1.Reports),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=reports.providers.js.map