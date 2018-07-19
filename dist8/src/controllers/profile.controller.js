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
const profile_1 = require("../models/profile");
const repository_1 = require("@loopback/repository");
const profile_repository_1 = require("../repositories/profile.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let ProfileController = class ProfileController {
    constructor(profileRepo) {
        this.profileRepo = profileRepo;
    }
    async getAllProfiles() {
        return await this.profileRepo.find();
    }
    async getSpecificEventProfile(eventId) {
        try {
            return await this.profileRepo.findOne({ where: { eventId: eventId } });
        }
        catch (err) {
            throw new rest_1.HttpErrors.NotFound('Profile not found');
        }
    }
    async createProfile(profile) {
        let createdProfile = await this.profileRepo.create(profile);
        return createdProfile;
    }
};
__decorate([
    rest_1.get("/allProfiles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getAllProfiles", null);
__decorate([
    rest_1.get("/eventProfileId"),
    __param(0, rest_1.param.query.number("eventId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getSpecificEventProfile", null);
__decorate([
    rest_1.post("/newProfile"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_1.Profile]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "createProfile", null);
ProfileController = __decorate([
    __param(0, repository_1.repository(profile_repository_1.ProfileRepository.name)),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepository])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map