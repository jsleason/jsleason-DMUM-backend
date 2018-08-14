import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { PublicCheckin } from '../models/publiccheckin';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class PublicCheckinRepository extends DefaultCrudRepository<
  PublicCheckin,
  typeof PublicCheckin.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(PublicCheckin, datasource);
  }

  async findAllPublicCheckin() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const checkinSheet = info.worksheets[4];
    return await promisify(checkinSheet.getRows)();
  }

  async findPublicCheckinId(Id: number) {
    let data = await this.findAllPublicCheckin();
    for (const row of data) {
      if (row.checkinid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findPublicParticipantCheckin(Id: string) {
    let data = await this.findAllPublicCheckin();
    for (const row of data) {
      if (row.participantid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findEventPublicCheckin(Id: number) {
    let data = await this.findAllPublicCheckin();
    for (const row of data) {
      if (row.eventid == Id) {
        return row;
      }
    };

    return { success: false };
  }

}
