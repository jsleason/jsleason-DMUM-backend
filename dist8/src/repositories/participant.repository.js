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
//import { GoogleSheet } from '../google-sheets-wrapper/src/GoogleSheet';
//import * as GoogleSpreadsheet from 'google-spreadsheet';
const util_1 = require("util");
// export class ParticipantRepository extends DefaultCrudRepository<
//   Participant,
//   typeof Participant.prototype.id
//   >
// {
//   constructor(@inject('datasources.db') protected datasource: DataSource) {
//     super(Participant, datasource);
//   }
// }
// async function accessSpreadsheet() {
//   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
//   await promisify(doc.useServiceAccountAuth)(creds);
//   const info = await promisify(doc.getInfo)();
//   console.log('Loaded doc: ' + info.title);
// }
let ParticipantRepository = class ParticipantRepository extends repository_1.DefaultCrudRepository {
    constructor(datasource) {
        super(participant_1.Participant, datasource);
        this.datasource = datasource;
    }
    async findAllAlum() {
        const GoogleSpreadsheet = require('google-spreadsheet');
        const doc = new GoogleSpreadsheet('1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI');
        await util_1.promisify(doc.useServiceAccountAuth)(require('../../../service-account.json'));
        const info = await util_1.promisify(doc.getInfo)();
        const alumSheet = info.worksheets[1];
        console.log(alumSheet);
        return await util_1.promisify(alumSheet.getRows)();
        //return await this.alumSheet.getRows();
    }
    async findAllDancers() {
        const GoogleSpreadsheet = require('google-spreadsheet');
        const doc = new GoogleSpreadsheet('1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI');
        await util_1.promisify(doc.useServiceAccountAuth)(require('../../../service-account.json'));
        const info = await util_1.promisify(doc.getInfo)();
        const dancerSheet = info.worksheets[2];
        console.log(dancerSheet);
        return await util_1.promisify(dancerSheet.getRows)();
    }
    async findIndividual_name(name) {
        let dancerData = await this.findAllDancers();
        for (const row of dancerData) {
            console.log(row.fullname);
            if (row.fullname == name) {
                console.log(name);
                return row;
            }
        }
        ;
        let alumData = await this.findAllAlum();
        for (const row of alumData) {
            if (row.fullname == name) {
                return row;
            }
        }
        ;
        throw new Error("Participant not found");
    }
    async findIndividual_uniqname(uniqname) {
        let dancerData = await this.findAllDancers();
        for (const row of dancerData) {
            console.log(row.uniqname);
            if (row.uniqname == uniqname) {
                console.log(uniqname);
                return row;
            }
        }
        ;
        let alumData = await this.findAllAlum();
        for (const row of alumData) {
            console.log(row.uniqname);
            if (row.uniqname == uniqname) {
                console.log(uniqname);
                return row;
            }
        }
        ;
        throw new Error("Participant not found");
    }
    async findTeam(team) {
        let dancerData = await this.findAllDancers();
        let members = Array();
        for (const row of dancerData) {
            console.log(row);
            if (row.orgteam == team) {
                console.log(team);
                members.push(row);
            }
            else if (row.dcteam == team) {
                console.log(team);
                members.push(row);
            }
            else if (row.dcorgteam == team) {
                console.log(team);
                members.push(row);
            }
            else if (row.notlistedorgteam == team) {
                console.log(team);
                members.push(row);
            }
        }
        ;
        let alumData = await this.findAllAlum();
        for (const row of alumData) {
            console.log(row.team);
            if (row.orgteam == team) {
                console.log(team);
                members.push(row);
            }
            else if (row.dcteam == team) {
                console.log(team);
                members.push(row);
            }
            else if (row.dcorgteam == team) {
                console.log(team);
                members.push(row);
            }
            else if (row.notlistedorgteam == team) {
                console.log(team);
                members.push(row);
            }
        }
        ;
        if (members.length == 0) {
            throw new Error("No Participants on team");
        }
        console.log(members);
        return members;
    }
    async findId(participantId) {
        this.findIndividual_uniqname(participantId);
        let dancerData = await this.findAllDancers();
        for (const row of dancerData) {
            console.log(row.umidnumber);
            if (row.umidnumber == participantId) {
                return row;
            }
        }
        ;
        let alumData = await this.findAllAlum();
        for (const row of alumData) {
            console.log(row.umidnumber);
            if (row.umidnumber == participantId) {
                return row;
            }
        }
        ;
        throw new Error("Participant not found");
    }
};
ParticipantRepository = __decorate([
    __param(0, core_1.inject('datasources.db')),
    __metadata("design:paramtypes", [loopback_datasource_juggler_1.DataSource])
], ParticipantRepository);
exports.ParticipantRepository = ParticipantRepository;
//# sourceMappingURL=participant.repository.js.map