"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyProviders = void 0;
const company_entity_1 = require("./company.entity");
exports.CompanyProviders = [
    {
        provide: 'COMPANY_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(company_entity_1.Company),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=company.providers.js.map