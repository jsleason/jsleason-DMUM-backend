import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Checkin } from '../models/checkin';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class CheckinRepository extends DefaultCrudRepository<
  Checkin,
  typeof Checkin.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Checkin, datasource);
  }

  async findAllCheckin() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const checkinSheet = info.worksheets[0];
    return await promisify(checkinSheet.getRows)();
  }

  async findCheckinId(Id: number) {
    let data = await this.findAllCheckin();
    for (const row of data) {
      if (row.checkinid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findParticipantCheckin(Id: string) {
    let data = await this.findAllCheckin();
    let arr = Array<any>();
    for (const row of data) {
      if (row.participantid == Id) {
        arr.push(row);
      }
    };

    return arr;
  }

  async findEventCheckin(Id: number) {
    let data = await this.findAllCheckin();
    let arr = Array<any>();
    for (const row of data) {
      if (row.eventid == Id) {
        arr.push(row);
      }
    };

    return arr;
  }

  async createCheckin(checkin: Checkin) {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const checkinSheet = info.worksheets[0];
    checkinSheet.addRow(checkin);
    return checkin;
  }
}
