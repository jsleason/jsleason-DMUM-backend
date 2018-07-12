import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Relation } from '../models/relation';
export declare class RelationRepository extends DefaultCrudRepository<Relation, typeof Relation.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
