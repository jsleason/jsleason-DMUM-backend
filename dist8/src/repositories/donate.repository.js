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
const donate_1 = require("../models/donate");
const util_1 = require("util");
let DonateRepository = class DonateRepository extends repository_1.DefaultCrudRepository {
    constructor(datasource) {
        super(donate_1.Donate, datasource);
        this.datasource = datasource;
    }
    async findAllDonations() {
        const GoogleSpreadsheet = require('google-spreadsheet');
        const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
        await util_1.promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'));
        const info = await util_1.promisify(doc.getInfo)();
        const donateSheet = info.worksheets[1];
        return await util_1.promisify(donateSheet.getRows)();
    }
    async findDonateId(Id) {
        let data = await this.findAllDonations();
        for (const row of data) {
            if (row.donateid == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async findNameDonation(Id) {
        let data = await this.findAllDonations();
        for (const row of data) {
            if (row.name == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async findDancerDonation(Id) {
        let data = await this.findAllDonations();
        for (const row of data) {
            if (row.dancer == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async findRelationDonation(Id) {
        let data = await this.findAllDonations();
        for (const row of data) {
            if (row.relationid == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async findEventDonation(Id) {
        let data = await this.findAllDonations();
        for (const row of data) {
            if (row.eventid == Id) {
                return row;
            }
        }
        ;
        return { success: false };
    }
    async createDonation(donation) {
        const GoogleSpreadsheet = require('google-spreadsheet');
        const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
        await util_1.promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'));
        const info = await util_1.promisify(doc.getInfo)();
        const donateSheet = info.worksheets[1];
        donateSheet.addRow(donation);
        return donation;
    }
};
DonateRepository = __decorate([
    __param(0, core_1.inject('datasources.db')),
    __metadata("design:paramtypes", [loopback_datasource_juggler_1.DataSource])
], DonateRepository);
exports.DonateRepository = DonateRepository;
//# sourceMappingURL=donate.repository.js.map