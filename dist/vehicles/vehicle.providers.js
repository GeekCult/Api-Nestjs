"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleProviders = void 0;
const vehicle_entity_1 = require("./vehicle.entity");
exports.VehicleProviders = [
    {
        provide: 'VEHICLE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(vehicle_entity_1.Vehicle),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=vehicle.providers.js.map