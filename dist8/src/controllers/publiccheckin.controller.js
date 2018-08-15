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
const publiccheckin_1 = require("../models/publiccheckin");
const repository_1 = require("@loopback/repository");
const publiccheckin_repository_1 = require("../repositories/publiccheckin.repository");
const event_repository_1 = require("../repositories/event.repository");
// import { sign, verify } from 'jsonwebtoken';
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let PublicCheckinController = class PublicCheckinController {
    constructor(publicCheckinRepo, eventRepo) {
        this.publicCheckinRepo = publicCheckinRepo;
        this.eventRepo = eventRepo;
    }
    async getAllCheckins() {
        return await this.publicCheckinRepo.findAllPublicCheckin();
    }
    async getSpecificCheckin_Id(checkinId) {
        // check if a Check In corresponding to checkingId exists
        return await this.publicCheckinRepo.findPublicCheckinId(checkinId);
    }
    async getParticipantCheckins(participantId) {
        // check if a Check In corresponding to checkingId exists
        let arr = await this.publicCheckinRepo.findPublicParticipantCheckin(participantId);
        if (arr.length == 0) {
            console.log("No Current Promotions");
        }
        return await arr;
        //throw new HttpErrors.NotFound("Sorry, checkin not found");
    }
    async getEventCheckIns(eventId) {
        // called like /checkins?eventId=<input>
        // TODO: check if a Check In corresponding to checkingId exists
        let arr = await this.publicCheckinRepo.findEventPublicCheckin(eventId);
        // Get all checkin corresponding to a specific event ID
        if (arr.length == 0) {
            console.log("No Current Promotions");
        }
        return await arr;
    }
    async createCheckin(publicCheckin) {
        publicCheckin.checkinId = publicCheckin.uniqname + publicCheckin.eventId;
        let createdCheckin = await this.publicCheckinRepo.createPCheckin(publicCheckin);
        try {
            return createdCheckin;
        }
        catch (err) {
            throw new rest_1.HttpErrors.NotFound('Cannot post public checkin');
        }
    }
};
__decorate([
    rest_1.get("/allPublicCheckins"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicCheckinController.prototype, "getAllCheckins", null);
__decorate([
    rest_1.get("/publicCheckinId"),
    __param(0, rest_1.param.query.number("checkinId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublicCheckinController.prototype, "getSpecificCheckin_Id", null);
__decorate([
    rest_1.get("/participantPublicCheckins"),
    __param(0, rest_1.param.query.string("participantId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicCheckinController.prototype, "getParticipantCheckins", null);
__decorate([
    rest_1.get("/eventPublicCheckins"),
    __param(0, rest_1.param.query.number("eventId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublicCheckinController.prototype, "getEventCheckIns", null);
__decorate([
    rest_1.post("/newPublicCheckin"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publiccheckin_1.PublicCheckin]),
    __metadata("design:returntype", Promise)
], PublicCheckinController.prototype, "createCheckin", null);
PublicCheckinController = __decorate([
    __param(0, repository_1.repository(publiccheckin_repository_1.PublicCheckinRepository.name)),
    __param(1, repository_1.repository(event_repository_1.EventRepository.name)),
    __metadata("design:paramtypes", [publiccheckin_repository_1.PublicCheckinRepository,
        event_repository_1.EventRepository])
], PublicCheckinController);
exports.PublicCheckinController = PublicCheckinController;
//# sourceMappingURL=publiccheckin.controller.js.map