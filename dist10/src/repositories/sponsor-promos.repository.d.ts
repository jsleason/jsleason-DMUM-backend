import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { SponsorPromos } from '../models/sponsor-promos';
export declare class SponsorPromosRepository extends DefaultCrudRepository<SponsorPromos, typeof SponsorPromos.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
