"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingController = void 0;
const common_1 = require("@nestjs/common");
const parse_int_pipe_1 = require("@nestjs/common/pipes/parse-int.pipe");
const parking_entity_1 = require("./parking.entity");
const parking_service_1 = require("./parking.service");
let ParkingController = class ParkingController {
    constructor(parkingsService) {
        this.parkingsService = parkingsService;
    }
    remove(id) {
        this.parkingsService.findOne(id);
    }
    createRecord(parking) {
        return this.parkingsService.createRecord(parking);
    }
    searchRecord(parking) {
        return this.parkingsService.searchLicensePlate(parking.license_plate);
    }
};
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParkingController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parking_entity_1.Parking]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "createRecord", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parking_entity_1.Parking]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "searchRecord", null);
ParkingController = __decorate([
    (0, common_1.Controller)('parking'),
    __metadata("design:paramtypes", [parking_service_1.ParkingService])
], ParkingController);
exports.ParkingController = ParkingController;
//# sourceMappingURL=parking.controller.js.map