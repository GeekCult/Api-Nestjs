"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingProviders = void 0;
const parking_entity_1 = require("./parking.entity");
exports.ParkingProviders = [
    {
        provide: 'PARKING_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(parking_entity_1.Parking),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=parking.providers.js.map