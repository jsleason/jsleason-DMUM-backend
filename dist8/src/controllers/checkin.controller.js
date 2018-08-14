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
const checkin_1 = require("../models/checkin");
const repository_1 = require("@loopback/repository");
const checkin_repository_1 = require("../repositories/checkin.repository");
const event_repository_1 = require("../repositories/event.repository");
// import { sign, verify } from 'jsonwebtoken';
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let CheckinController = class CheckinController {
    constructor(checkinRepo, eventRepo) {
        this.checkinRepo = checkinRepo;
        this.eventRepo = eventRepo;
    }
    async getAllCheckins() {
        return await this.checkinRepo.findAllCheckin();
    }
    async getSpecificCheckin_Id(checkinId) {
        // check if a Check In corresponding to checkingId exists
        return await this.checkinRepo.findCheckinId(checkinId);
    }
    async getParticipantCheckins(participantId) {
        return await this.checkinRepo.findParticipantCheckin(participantId);
    }
    async getEventCheckIns(eventId) {
        return await this.checkinRepo.findEventCheckin(eventId);
    }
    async createCheckin(checkin) {
        let createdCheckin = await this.checkinRepo.create(checkin);
        return createdCheckin;
    }
};
__decorate([
    rest_1.get("/allCheckins"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CheckinController.prototype, "getAllCheckins", null);
__decorate([
    rest_1.get("/checkinId"),
    __param(0, rest_1.param.query.number("checkinId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CheckinController.prototype, "getSpecificCheckin_Id", null);
__decorate([
    rest_1.get("/participantCheckins"),
    __param(0, rest_1.param.query.string("participantId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CheckinController.prototype, "getParticipantCheckins", null);
__decorate([
    rest_1.get("/eventCheckins"),
    __param(0, rest_1.param.query.number("eventId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CheckinController.prototype, "getEventCheckIns", null);
__decorate([
    rest_1.post("/newCheckin"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkin_1.Checkin]),
    __metadata("design:returntype", Promise)
], CheckinController.prototype, "createCheckin", null);
CheckinController = __decorate([
    __param(0, repository_1.repository(checkin_repository_1.CheckinRepository.name)),
    __param(1, repository_1.repository(event_repository_1.EventRepository.name)),
    __metadata("design:paramtypes", [checkin_repository_1.CheckinRepository,
        event_repository_1.EventRepository])
], CheckinController);
exports.CheckinController = CheckinController;
//# sourceMappingURL=checkin.controller.js.map