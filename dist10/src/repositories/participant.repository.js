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
const repository_1 = require("@loopback/repository");
const core_1 = require("@loopback/core");
const loopback_datasource_juggler_1 = require("loopback-datasource-juggler");
const participant_1 = require("../models/participant");
const GoogleSheet_1 = require("../google-sheets-wrapper/src/GoogleSheet");
//import { GoogleSheet } from '../google-sheets-wrapper/node_modules/@types/node/package.json';
// import * as GoogleSpreadsheet from 'google-spreadsheet';
// export class ParticipantRepository extends DefaultCrudRepository<
//   Participant,
//   typeof Participant.prototype.id
//   >
// {
//   constructor(@inject('datasources.db') protected datasource: DataSource) {
//     super(Participant, datasource);
//   }
// }
let ParticipantRepository = class ParticipantRepository extends repository_1.DefaultCrudRepository {
    constructor(datasource) {
        super(participant_1.Participant, datasource);
        this.datasource = datasource;
        this.dancerSheet = new GoogleSheet_1.GoogleSheet({
            sheetId: '1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI',
            range: "'Dancer Master'!A:AN"
        });
        this.alumSheet = new GoogleSheet_1.GoogleSheet({
            sheetId: '1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI',
            range: "'Alumni Dancer Registration'!A:E"
        });
        // this.doc = new GoogleSpreadsheet('1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI');
        // this.doc.createServiceAccountAuth({
        //   client_email: "",
        //   private_key: ""
        // });
    }
    async findAllAlum() {
        return await this.alumSheet.getRows();
    }
    async findAllDancers() {
        return await this.dancerSheet.getRows();
    }
    async findIndividual_name(name) {
        let dancerData = await this.findAllDancers();
        dancerData.forEach((item) => {
            if (item.full_name == name) {
                return item;
            }
        });
        let alumData = await this.findAllAlum();
        alumData.forEach((item) => {
            if (item.full_name == name) {
                return item;
            }
        });
        throw new Error("Participant not found");
    }
    async findIndividual_uniqname(uniqname) {
        let dancerData = await this.findAllDancers();
        dancerData.forEach((item) => {
            if (item.uniqname == uniqname) {
                return item;
            }
        });
        let alumData = await this.findAllAlum();
        alumData.forEach((item) => {
            if (item.uniqname == uniqname) {
                return item;
            }
        });
        throw new Error("Participant not found");
    }
};
ParticipantRepository = __decorate([
    __param(0, core_1.inject('datasources.db')),
    __metadata("design:paramtypes", [loopback_datasource_juggler_1.DataSource])
], ParticipantRepository);
exports.ParticipantRepository = ParticipantRepository;
//# sourceMappingURL=participant.repository.js.map