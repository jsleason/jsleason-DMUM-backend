import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Participant } from "../models/participant";
import { repository } from "@loopback/repository";
import { ParticipantRepository } from "../repositories/participant.repository";
//import { sign, verify } from 'jsonwebtoken';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ParticipantController {
  constructor(
    @repository(ParticipantRepository.name) private participantRepo: ParticipantRepository
  ) { }

  @get("/allParticipants")
  async getAllParticipants(
  ): Promise<Array<any>> {
    return await this.participantRepo.find();
  }

  @get("/participantId")
  async getSpecificParticipant_Id(
    @param.query.string("participantId") participantId: any
  ): Promise<any> {

    return await this.participantRepo.findId(participantId);

  }

  @get("/participantName")
  async getSpecificParticipant_name(
    @param.query.string("name") name: string
  ): Promise<any> {
    return await this.participantRepo.findIndividual_name(name);

  }

  @get("/participantUniqname")
  async getSpecificParticipant_uniqname(
    @param.query.string("uniqname") uniqname: string
  ): Promise<any> {
    return await this.participantRepo.findIndividual_uniqname(uniqname);

  }

  @get("/teamParticipants")
  async getSpecificParticipant_team(
    @param.query.string("team") team: string
  ): Promise<Array<Participant>> {
    return await this.participantRepo.findTeam(team);
  }

  @post("/newParticipants")
  async createParticipant(
    @requestBody() participant: Participant
  ): Promise<Participant> {

    let createdParticipant = await this.participantRepo.create(participant);
    return createdParticipant;

  }

}
