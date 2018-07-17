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
const participant_1 = require("../models/participant");
const repository_1 = require("@loopback/repository");
const participant_repository_1 = require("../repositories/participant.repository");
//import { sign, verify } from 'jsonwebtoken';
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let ParticipantController = class ParticipantController {
    constructor(participantRepo) {
        this.participantRepo = participantRepo;
    }
    async getAllParticipants() {
        return await this.participantRepo.find();
    }
    async getSpecificParticipant_Id(participantId) {
        return await this.participantRepo.findId(participantId);
    }
    async getSpecificParticipant_name(name) {
        return await this.participantRepo.findIndividual_name(name);
    }
    async getSpecificParticipant_uniqname(uniqname) {
        return await this.participantRepo.findIndividual_uniqname(uniqname);
    }
    async getSpecificParticipant_team(team) {
        return await this.participantRepo.findTeam(team);
    }
    async createParticipant(participant) {
        let createdParticipant = await this.participantRepo.create(participant);
        return createdParticipant;
    }
};
__decorate([
    rest_1.get("/allParticipants"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "getAllParticipants", null);
__decorate([
    rest_1.get("/participantId"),
    __param(0, rest_1.param.query.string("participantId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "getSpecificParticipant_Id", null);
__decorate([
    rest_1.get("/participantName"),
    __param(0, rest_1.param.query.string("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "getSpecificParticipant_name", null);
__decorate([
    rest_1.get("/participantUniqname"),
    __param(0, rest_1.param.query.string("uniqname")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "getSpecificParticipant_uniqname", null);
__decorate([
    rest_1.get("/teamParticipants"),
    __param(0, rest_1.param.query.string("team")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "getSpecificParticipant_team", null);
__decorate([
    rest_1.post("/newParticipants"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [participant_1.Participant]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "createParticipant", null);
ParticipantController = __decorate([
    __param(0, repository_1.repository(participant_repository_1.ParticipantRepository.name)),
    __metadata("design:paramtypes", [participant_repository_1.ParticipantRepository])
], ParticipantController);
exports.ParticipantController = ParticipantController;
//# sourceMappingURL=participant.controller.js.map