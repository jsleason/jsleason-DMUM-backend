import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Teams } from "../models/team";
import { repository } from "@loopback/repository";
import { TeamRepository } from "../repositories/team.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class TeamController {
  constructor(
    @repository(TeamRepository.name) private teamRepo: TeamRepository
  ) { }

  @get("/allTeams")
  async getAllTeams(
  ): Promise<Array<any>> {
    return await this.teamRepo.findAllTeams();
  }

  @get("/teamId")
  async getSpecificTeam_Id(
    @param.query.number("teamId") teamId: number
  ): Promise<any> {
    return await this.teamRepo.findTeamId(teamId);
  }

  @get("/teamName")
  async getSpecificTeam_Name(
    @param.query.string("name") name: string
  ): Promise<any> {
    return await this.teamRepo.findTeamName(name);
  }

  @post("/newTeam")
  async createTeam(
    @requestBody() team: Teams
  ): Promise<Teams> {

    let createdTeam = await this.teamRepo.create(team);
    return createdTeam;

  }

}
