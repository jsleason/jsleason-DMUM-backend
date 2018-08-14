import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Profile } from '../models/profile';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Profile, datasource);
  }

  async findAllProfiles() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const profileSheet = info.worksheets[3];
    return await promisify(profileSheet.getRows)();
  }

  async findEventProfile(Id: number) {
    let data = await this.findAllProfiles();
    for (const row of data) {
      if (row.eventid == Id) {
        return row;
      }
    };

    return { success: false };
  }

}
