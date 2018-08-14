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
const sponsor_promos_1 = require("../models/sponsor-promos");
const repository_1 = require("@loopback/repository");
const sponsor_promos_repository_1 = require("../repositories/sponsor-promos.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let SponsorPromosController = class SponsorPromosController {
    constructor(sponsorPromosRepo) {
        this.sponsorPromosRepo = sponsorPromosRepo;
    }
    async getAllPromos() {
        let arr = await this.sponsorPromosRepo.findAllSPromos();
        if (arr.length == 0) {
            console.log("No Current Promotions");
        }
        return arr;
    }
    async getSpecificPromo_Id(sponsorPromoId) {
        return await this.sponsorPromosRepo.findSPromoId(sponsorPromoId);
    }
    async getSpecificPromo_title(title) {
        return await this.sponsorPromosRepo.findSPromoTitle(title);
    }
    async createPromo(promo) {
        let createdPromo = await this.sponsorPromosRepo.create(promo);
        return createdPromo;
    }
};
__decorate([
    rest_1.get("/allSponsorPromos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SponsorPromosController.prototype, "getAllPromos", null);
__decorate([
    rest_1.get("/sponsorPromoId"),
    __param(0, rest_1.param.query.number("sponsorPromoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SponsorPromosController.prototype, "getSpecificPromo_Id", null);
__decorate([
    rest_1.get("/sponsorPromoTitle"),
    __param(0, rest_1.param.query.string("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SponsorPromosController.prototype, "getSpecificPromo_title", null);
__decorate([
    rest_1.post("/newSponsorPromos"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sponsor_promos_1.SponsorPromos]),
    __metadata("design:returntype", Promise)
], SponsorPromosController.prototype, "createPromo", null);
SponsorPromosController = __decorate([
    __param(0, repository_1.repository(sponsor_promos_repository_1.SponsorPromosRepository.name)),
    __metadata("design:paramtypes", [sponsor_promos_repository_1.SponsorPromosRepository])
], SponsorPromosController);
exports.SponsorPromosController = SponsorPromosController;
//# sourceMappingURL=sponsor-promos.controller.js.map