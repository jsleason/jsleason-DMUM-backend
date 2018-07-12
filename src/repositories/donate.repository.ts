import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Donate } from '../models/donate';

export class DonateRepository extends DefaultCrudRepository<
  Donate,
  typeof Donate.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Donate, datasource);
  }
}
