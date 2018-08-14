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
const rest_1 = require("@loopback/rest");
const registration_promos_1 = require("../models/registration-promos");
const repository_1 = require("@loopback/repository");
const registration_promos_repository_1 = require("../repositories/registration-promos.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let RegistrationPromosController = class RegistrationPromosController {
    constructor(registrationPromosRepo) {
        this.registrationPromosRepo = registrationPromosRepo;
    }
    async getAllPromos() {
        let arr = await this.registrationPromosRepo.findRPromos();
        if (arr.length == 0) {
            console.log("No Current Promotions");
        }
        return arr;
    }
    async getSpecificPromo_Id(registrationPromoId) {
        return await this.registrationPromosRepo.findRPromoId(registrationPromoId);
    }
    async getSpecificPromo_title(title) {
        return await this.registrationPromosRepo.findRPromoTitle(title);
    }
    async createPromo(promo) {
        let createdPromo = await this.registrationPromosRepo.create(promo);
        return createdPromo;
    }
};
__decorate([
    rest_1.get("/allRegistrationPromos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegistrationPromosController.prototype, "getAllPromos", null);
__decorate([
    rest_1.get("/registrationPromoId"),
    __param(0, rest_1.param.query.number("registrationPromoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrationPromosController.prototype, "getSpecificPromo_Id", null);
__decorate([
    rest_1.get("/registrationPromoTitle"),
    __param(0, rest_1.param.query.string("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationPromosController.prototype, "getSpecificPromo_title", null);
__decorate([
    rest_1.post("/newRegistrationPromo"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_promos_1.RegistrationPromos]),
    __metadata("design:returntype", Promise)
], RegistrationPromosController.prototype, "createPromo", null);
RegistrationPromosController = __decorate([
    __param(0, repository_1.repository(registration_promos_repository_1.RegistrationPromosRepository.name)),
    __metadata("design:paramtypes", [registration_promos_repository_1.RegistrationPromosRepository])
], RegistrationPromosController);
exports.RegistrationPromosController = RegistrationPromosController;
//# sourceMappingURL=registration-promos.controller.js.map