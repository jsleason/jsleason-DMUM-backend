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
const publiccheckin_1 = require("../models/publiccheckin");
const util_1 = require("util");
let PublicCheckinRepository = class PublicCheckinRepository extends repository_1.DefaultCrudRepository {
    constructor(datasource) {
        super(publiccheckin_1.PublicCheckin, datasource);
        this.datasource = datasource;
    }
    async findAllPublicCheckin() {
        const GoogleSpreadsheet = require('google-spreadsheet');
        const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
        await util_1.promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'));
        const info = await util_1.promisify(doc.getInfo)();
        const checkinSheet = info.worksheets[4];
        return await util_1.promisify(checkinSheet.getRows)();
    }
    async findPublicCheckinId(Id) {
        let data = await this.findAllPublicCheckin();
        for (const row of data) {
            if (row.checkinid == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async findPublicParticipantCheckin(Id) {
        let data = await this.findAllPublicCheckin();
        for (const row of data) {
            if (row.participantid == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async findEventPublicCheckin(Id) {
        let data = await this.findAllPublicCheckin();
        for (const row of data) {
            if (row.eventid == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
};
PublicCheckinRepository = __decorate([
    __param(0, core_1.inject('datasources.db')),
    __metadata("design:paramtypes", [loopback_datasource_juggler_1.DataSource])
], PublicCheckinRepository);
exports.PublicCheckinRepository = PublicCheckinRepository;
//# sourceMappingURL=publiccheckin.repository.js.map