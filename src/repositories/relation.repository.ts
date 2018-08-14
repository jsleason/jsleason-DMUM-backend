import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Relation } from '../models/relation';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class RelationRepository extends DefaultCrudRepository<
  Relation,
  typeof Relation.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Relation, datasource);
  }

  async findAllRelations() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const checkinSheet = info.worksheets[6]
    return await promisify(checkinSheet.getRows)();
  }

  async findRelationId(Id: number) {
    let data = await this.findAllRelations();
    for (const row of data) {
      if (row.relationid == Id) {
        return row;
      }
    };

    return { success: false };
  }

  async findRelationType(Id: string) {
    let data = await this.findAllRelations();
    for (const row of data) {
      if (row.type == Id) {
        return row;
      }
    };

    return { success: false };
  }

}
