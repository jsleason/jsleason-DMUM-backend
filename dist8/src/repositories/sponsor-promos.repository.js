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
const sponsor_promos_1 = require("../models/sponsor-promos");
const util_1 = require("util");
let SponsorPromosRepository = class SponsorPromosRepository extends repository_1.DefaultCrudRepository {
    constructor(datasource) {
        super(sponsor_promos_1.SponsorPromos, datasource);
        this.datasource = datasource;
    }
    async findAllSPromos() {
        const GoogleSpreadsheet = require('google-spreadsheet');
        const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
        await util_1.promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'));
        const info = await util_1.promisify(doc.getInfo)();
        const checkinSheet = info.worksheets[7];
        return await util_1.promisify(checkinSheet.getRows)();
    }
    async findSPromoId(Id) {
        let data = await this.findAllSPromos();
        for (const row of data) {
            if (row.sponsorpromoid == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async findSPromoTitle(Id) {
        let data = await this.findAllSPromos();
        for (const row of data) {
            if (row.title == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
};
SponsorPromosRepository = __decorate([
    __param(0, core_1.inject('datasources.db')),
    __metadata("design:paramtypes", [loopback_datasource_juggler_1.DataSource])
], SponsorPromosRepository);
exports.SponsorPromosRepository = SponsorPromosRepository;
//# sourceMappingURL=sponsor-promos.repository.js.map