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
const team_1 = require("../models/team");
const repository_1 = require("@loopback/repository");
const team_repository_1 = require("../repositories/team.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let TeamController = class TeamController {
    constructor(teamRepo) {
        this.teamRepo = teamRepo;
    }
    async getAllTeams() {
        return await this.teamRepo.find();
    }
    async getSpecificTeam_Id(teamId) {
        return await this.teamRepo.findOne({ where: { teamId } });
    }
    async getSpecificTeam_Name(name) {
        return await this.teamRepo.find({ where: { name } });
    }
    async createTeam(team) {
        let createdTeam = await this.teamRepo.create(team);
        return createdTeam;
    }
};
__decorate([
    rest_1.get("/allTeams"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getAllTeams", null);
__decorate([
    rest_1.get("/teamId"),
    __param(0, rest_1.param.query.number("teamId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getSpecificTeam_Id", null);
__decorate([
    rest_1.get("/teamName"),
    __param(0, rest_1.param.query.string("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getSpecificTeam_Name", null);
__decorate([
    rest_1.post("/newTeam"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_1.Teams]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "createTeam", null);
TeamController = __decorate([
    __param(0, repository_1.repository(team_repository_1.TeamRepository.name)),
    __metadata("design:paramtypes", [team_repository_1.TeamRepository])
], TeamController);
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map