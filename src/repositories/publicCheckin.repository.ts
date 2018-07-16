import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { PublicCheckin } from '../models/publiccheckin';

export class PublicCheckinRepository extends DefaultCrudRepository<
  PublicCheckin,
  typeof PublicCheckin.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(PublicCheckin, datasource);
  }
}
