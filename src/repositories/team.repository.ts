import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Teams } from '../models/team';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class TeamRepository extends DefaultCrudRepository<
  Teams,
  typeof Teams.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Teams, datasource);
  }

  async findAllTeams() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const checkinSheet = info.worksheets[8];
    return await promisify(checkinSheet.getRows)();
  }

  async findTeamName(Id: string) {
    let data = await this.findAllTeams();
    for (const row of data) {
      if (row.name == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findTeamId(Id: number) {
    let data = await this.findAllTeams();
    for (const row of data) {
      if (row.teamid == Id) {
        return row;
      }
    };

    return { success: false };
  }

}
