import { Teams } from "../models/team";
import { TeamRepository } from "../repositories/team.repository";
export declare class TeamController {
    private teamRepo;
    constructor(teamRepo: TeamRepository);
    getAllTeams(): Promise<Array<any>>;
    getSpecificTeam_Id(teamId: number): Promise<any>;
    getSpecificTeam_Name(name: string): Promise<any>;
    createTeam(participant: Teams): Promise<Teams>;
}
