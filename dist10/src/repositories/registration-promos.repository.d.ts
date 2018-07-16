import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { RegistrationPromos } from '../models/registration-promos';
export declare class RegistrationPromosRepository extends DefaultCrudRepository<RegistrationPromos, typeof RegistrationPromos.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
