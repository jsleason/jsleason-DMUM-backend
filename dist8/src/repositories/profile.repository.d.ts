import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Profile } from '../models/profile';
export declare class ProfileRepository extends DefaultCrudRepository<Profile, typeof Profile.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
    findAllProfiles(): Promise<any>;
    findEventProfile(Id: number): Promise<any>;
}
