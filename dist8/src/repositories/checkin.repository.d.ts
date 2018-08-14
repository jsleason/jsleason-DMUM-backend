import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Checkin } from '../models/checkin';
export declare class CheckinRepository extends DefaultCrudRepository<Checkin, typeof Checkin.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
    findAllCheckin(): Promise<any>;
    findCheckinId(Id: number): Promise<any>;
    findParticipantCheckin(Id: string): Promise<any>;
    findEventCheckin(Id: number): Promise<any>;
    createCheckin(checkin: Checkin): Promise<any>;
}
