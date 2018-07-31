import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Participant } from '../models/participant';
export declare class ParticipantRepository extends DefaultCrudRepository<Participant, typeof Participant.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
    findAllAlum(): Promise<any>;
    findAllDancers(): Promise<any>;
    findUniqnameColumn(): Promise<any>;
    findIndividual_name(name: string): Promise<any>;
    findIndividual_uniqname(uniqname: string): Promise<any>;
    findTeam(team: any): Promise<any[]>;
    findId(participantId: any): Promise<any>;
}
