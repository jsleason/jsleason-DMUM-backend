import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Donate } from '../models/donate';
export declare class DonateRepository extends DefaultCrudRepository<Donate, typeof Donate.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
    findAllDonations(): Promise<any>;
    findDonateId(Id: number): Promise<any>;
    findNameDonation(Id: string): Promise<any>;
    findDancerDonation(Id: string): Promise<any>;
    findRelationDonation(Id: number): Promise<any>;
    findEventDonation(Id: number): Promise<any>;
    createDonation(donation: Partial<Donate>): Promise<Partial<Donate>>;
}
