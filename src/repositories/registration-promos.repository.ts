import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { RegistrationPromos } from '../models/registration-promos';

export class RegistrationPromosRepository extends DefaultCrudRepository<
  RegistrationPromos,
  typeof RegistrationPromos.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(RegistrationPromos, datasource);
  }
}
