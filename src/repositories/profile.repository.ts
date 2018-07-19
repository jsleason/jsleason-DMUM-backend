import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Profile } from '../models/profile';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Profile, datasource);
  }
}
