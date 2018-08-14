import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { RegistrationPromos } from '../models/registration-promos';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class RegistrationPromosRepository extends DefaultCrudRepository<
  RegistrationPromos,
  typeof RegistrationPromos.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(RegistrationPromos, datasource);
  }

  async findRPromos() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const rPromoSheet = info.worksheets[5];
    return await promisify(rPromoSheet.getRows)();
  }

  async findRPromoId(Id: number) {
    let data = await this.findRPromos();
    for (const row of data) {
      if (row.registrationpromoid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findRPromoTitle(Id: string) {
    let data = await this.findRPromos();
    for (const row of data) {
      if (row.title == Id) {
        return row;
      }
    };

    return { success: false };
  }

}
