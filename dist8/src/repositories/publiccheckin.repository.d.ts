import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { PublicCheckin } from '../models/publiccheckin';
export declare class PublicCheckinRepository extends DefaultCrudRepository<PublicCheckin, typeof PublicCheckin.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
    findAllPublicCheckin(): Promise<any>;
    findPublicCheckinId(Id: number): Promise<any>;
    findPublicParticipantCheckin(pid: string): Promise<any[]>;
    findEventPublicCheckin(Id: number): Promise<any[]>;
    createPCheckin(checkin: PublicCheckin): Promise<PublicCheckin>;
}
