"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authProviders = void 0;
const auth_entity_1 = require("./auth.entity");
exports.authProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(auth_entity_1.UserAuth),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=auth.providers.js.map