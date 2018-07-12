import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { SponsorPromos } from '../models/sponsor-promos';

export class SponsorPromosRepository extends DefaultCrudRepository<
  SponsorPromos,
  typeof SponsorPromos.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(SponsorPromos, datasource);
  }
}
