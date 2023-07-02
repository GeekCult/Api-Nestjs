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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const upload_repository_1 = require("./upload.repository");
let UploadService = class UploadService {
    constructor(uploadRepository) {
        this.uploadRepository = uploadRepository;
    }
    async findAll() {
        return this.uploadRepository.find();
    }
    async get() {
        return this.uploadRepository.find();
    }
    async create(upload) {
        return this.uploadRepository.save(upload);
    }
    async getFile(id) {
        return this.uploadRepository.findOneBy({ id });
    }
    async delete(id) {
        await this.uploadRepository.delete(id);
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [upload_repository_1.UploadRepository])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map