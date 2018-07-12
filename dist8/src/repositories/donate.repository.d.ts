import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Donate } from '../models/donate';
export declare class DonateRepository extends DefaultCrudRepository<Donate, typeof Donate.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
