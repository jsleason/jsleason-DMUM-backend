import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Participant } from '../models/participant';
export declare class ParticipantRepository extends DefaultCrudRepository<Participant, typeof Participant.prototype.id> {
    protected datasource: DataSource;
    private dancerSheet;
    private alumSheet;
    constructor(datasource: DataSource);
    findAllAlum(): Promise<any>;
    findAllDancers(): Promise<any>;
    findIndividual_name(name: string): Promise<void>;
}
