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
        return await row;
      }
    };

    return { success: false };
  }

  async findPublicParticipantCheckin(pid: string) {
    let data = await this.findAllPublicCheckin();
    let checkins = Array<any>();
    for (const row of data) {
      if (row.uniqname == pid) {
        checkins.push(row);
      }
    };

    return await checkins;
  }

  async findEventPublicCheckin(Id: number) {
    let data = await this.findAllPublicCheckin();
    let arr = Array<any>();
    for (const row of data) {
      if (row.eventid == Id) {
        arr.push(row);
      }
    };

    return arr;
  }

  async createPCheckin(checkin: PublicCheckin) {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const checkinSheet = info.worksheets[4];
    checkinSheet.addRow(checkin);
    return checkin;
  }

}
