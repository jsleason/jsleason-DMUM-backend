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
    @param.query.number("participantId") participantId: string
  ): Promise<any> {

    try {
      return await this.participantRepo.find();
    } catch (e) {
      throw new HttpErrors.NotFound();
    }

    // return await this.participantRepo.findById(participantId);

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
    @param.query.number("team") team: number
  ): Promise<Array<Participant>> {
    return await this.participantRepo.find({ where: { team } });
  }

  @post("/newParticipants")
  async createParticipant(
    @requestBody() participant: Participant
  ): Promise<Participant> {

    let createdParticipant = await this.participantRepo.create(participant);
    return createdParticipant;

  }

  // sign({
  //   user: user
  // }, 'shh', {
  //   issuer: 'auth.ix.co.za',
  //   audience: 'ix.co.za'
  // });


}
