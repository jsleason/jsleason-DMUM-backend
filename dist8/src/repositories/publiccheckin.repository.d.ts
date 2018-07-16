import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { PublicCheckin } from '../models/publiccheckin';
export declare class PublicCheckinRepository extends DefaultCrudRepository<PublicCheckin, typeof PublicCheckin.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
