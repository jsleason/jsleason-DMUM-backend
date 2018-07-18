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
const repository_1 = require("@loopback/repository");
const donate_repository_1 = require("../repositories/donate.repository");
var stripe = require("stripe")("sk_test_24DOtrdc3BkC9qL4kO0Jp4cR");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let DonateController = class DonateController {
    constructor(donateRepo) {
        this.donateRepo = donateRepo;
    }
    async getAllDonations() {
        return await this.donateRepo.find();
    }
    async getSpecificDonation(donateId) {
        // check if a Check In corresponding to checkingId exists
        return await this.donateRepo.findById(donateId);
        //throw new HttpErrors.NotFound("Sorry, donation not found");
    }
    async getDonations_byName(name) {
        // check if a Check In corresponding to checkingId exists
        return await this.donateRepo.find({ where: { name } });
        //throw new HttpErrors.NotFound("Sorry, donation not found");
    }
    async getDonation_toDancer(dancer) {
        // check if a Check In corresponding to checkingId exists
        return await this.donateRepo.find({ where: { dancer } });
        // throw new HttpErrors.NotFound("Sorry, donation not found");
    }
    async getDonation_relation(relationId) {
        // check if a Check In corresponding to checkingId exists
        return await this.donateRepo.find({ where: { relationId } });
        //throw new HttpErrors.NotFound("Sorry, donation not found");
    }
    async getEventDonations(eventId) {
        return await this.donateRepo.find({ where: { eventId } });
        // throw new HttpErrors.NotFound("Sorry, event not found");
    }
    async createDonate(donate) {
        const charge = await stripe.charges.create({
            amount: donate.amount,
            currency: 'usd',
            source: 'tok_visa',
        });
        console.log('charge created!');
        donate.chargeId = charge.id;
        let createdDonate = await this.donateRepo.create(donate);
        return createdDonate;
    }
};
__decorate([
    rest_1.get("/allDonations"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonateController.prototype, "getAllDonations", null);
__decorate([
    rest_1.get("/donationId"),
    __param(0, rest_1.param.query.number("donateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonateController.prototype, "getSpecificDonation", null);
__decorate([
    rest_1.get("/nameDonations"),
    __param(0, rest_1.param.query.string("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonateController.prototype, "getDonations_byName", null);
__decorate([
    rest_1.get("/dancerDonations"),
    __param(0, rest_1.param.query.string("dancer")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonateController.prototype, "getDonation_toDancer", null);
__decorate([
    rest_1.get("/donationsRelation"),
    __param(0, rest_1.param.query.number("relationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonateController.prototype, "getDonation_relation", null);
__decorate([
    rest_1.get("/eventDonations"),
    __param(0, rest_1.param.query.number("eventId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DonateController.prototype, "getEventDonations", null);
__decorate([
    rest_1.post("/newDonation"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DonateController.prototype, "createDonate", null);
DonateController = __decorate([
    __param(0, repository_1.repository(donate_repository_1.DonateRepository.name)),
    __metadata("design:paramtypes", [donate_repository_1.DonateRepository])
], DonateController);
exports.DonateController = DonateController;
//# sourceMappingURL=donate.controller.js.map