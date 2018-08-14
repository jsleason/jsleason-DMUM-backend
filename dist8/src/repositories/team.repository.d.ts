import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Teams } from '../models/team';
export declare class TeamRepository extends DefaultCrudRepository<Teams, typeof Teams.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
    findAllTeams(): Promise<any>;
    findTeamName(Id: string): Promise<any>;
    findTeamId(Id: number): Promise<any>;
}
