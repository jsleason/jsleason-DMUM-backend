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
const relation_1 = require("../models/relation");
const repository_1 = require("@loopback/repository");
const relation_repository_1 = require("../repositories/relation.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let RelationController = class RelationController {
    constructor(relationRepo) {
        this.relationRepo = relationRepo;
    }
    async getAllRelations() {
        return await this.relationRepo.find();
    }
    async getSpecificRelation(relationId) {
        // check if a Check In corresponding to checkingId exists
        return await this.relationRepo.findById(relationId);
        // if (checkinId == "A") {
        //   return "ABC";
        // }
        // if (checkinId == "B") {
        //   return "BCD";
        // }
        // throw new HttpErrors.NotFound("Sorry, relation not found");
    }
    async getRelation_type(type) {
        // check if a Check In corresponding to checkingId exists
        return await this.relationRepo.find({ where: { type } });
        // if (checkinId == "A") {
        //   return "ABC";
        // }
        // if (checkinId == "B") {
        //   return "BCD";
        // }
        // throw new HttpErrors.NotFound("Sorry, relation not found");
    }
    async createRelation(relation) {
        let createdRelation = await this.relationRepo.create(relation_1.Relation);
        return createdRelation;
    }
};
__decorate([
    rest_1.get("/allRelations"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelationController.prototype, "getAllRelations", null);
__decorate([
    rest_1.get("/relations/{relationId}"),
    __param(0, rest_1.param.path.number("relationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelationController.prototype, "getSpecificRelation", null);
__decorate([
    rest_1.get("/relationType"),
    __param(0, rest_1.param.query.string("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RelationController.prototype, "getRelation_type", null);
__decorate([
    rest_1.post("/newRelation"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [relation_1.Relation]),
    __metadata("design:returntype", Promise)
], RelationController.prototype, "createRelation", null);
RelationController = __decorate([
    __param(0, repository_1.repository(relation_repository_1.RelationRepository.name)),
    __metadata("design:paramtypes", [relation_repository_1.RelationRepository])
], RelationController);
exports.RelationController = RelationController;
//# sourceMappingURL=relation.controller.js.map