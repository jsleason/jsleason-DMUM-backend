import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Checkin } from '../models/checkin';

export class CheckinRepository extends DefaultCrudRepository<
  Checkin,
  typeof Checkin.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Checkin, datasource);
  }
}
