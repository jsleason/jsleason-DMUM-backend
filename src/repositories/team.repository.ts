import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Teams } from '../models/team';

export class TeamRepository extends DefaultCrudRepository<
  Teams,
  typeof Teams.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Teams, datasource);
  }
}
