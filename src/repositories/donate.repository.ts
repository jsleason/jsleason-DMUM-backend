import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Donate } from '../models/donate';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class DonateRepository extends DefaultCrudRepository<
  Donate,
  typeof Donate.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Donate, datasource);
  }

  async findAllDonations() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const donateSheet = info.worksheets[1];
    return await promisify(donateSheet.getRows)();
  }

  async findDonateId(Id: number) {
    let data = await this.findAllDonations();
    for (const row of data) {
      if (row.donateid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findNameDonation(Id: string) {
    let data = await this.findAllDonations();
    for (const row of data) {
      if (row.name == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findDancerDonation(Id: string) {
    let data = await this.findAllDonations();
    for (const row of data) {
      if (row.dancer == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findRelationDonation(Id: number) {
    let data = await this.findAllDonations();
    for (const row of data) {
      if (row.relationid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findEventDonation(Id: number) {
    let data = await this.findAllDonations();
    for (const row of data) {
      if (row.eventid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async createDonation(donation: Partial<Donate>) {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const donateSheet = info.worksheets[1];
    donateSheet.addRow(donation);
    return donation;
  }

}
