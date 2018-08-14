import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { SponsorPromos } from '../models/sponsor-promos';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class SponsorPromosRepository extends DefaultCrudRepository<
  SponsorPromos,
  typeof SponsorPromos.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(SponsorPromos, datasource);
  }

  async findAllSPromos() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const checkinSheet = info.worksheets[7];
    return await promisify(checkinSheet.getRows)();
  }

  async findSPromoId(Id: number) {
    let data = await this.findAllSPromos();
    for (const row of data) {
      if (row.sponsorpromoid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findSPromoTitle(Id: string) {
    let data = await this.findAllSPromos();
    for (const row of data) {
      if (row.title == Id) {
        return row;
      }
    };

    return { success: false };
  }

}
