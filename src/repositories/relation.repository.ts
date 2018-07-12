import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Relation } from '../models/relation';

export class RelationRepository extends DefaultCrudRepository<
  Relation,
  typeof Relation.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Relation, datasource);
  }
}
