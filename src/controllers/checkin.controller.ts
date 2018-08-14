import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Checkin } from "../models/checkin";
import { repository } from "@loopback/repository";
import { CheckinRepository } from "../repositories/checkin.repository";
import { EventRepository } from "../repositories/event.repository";
// import { sign, verify } from 'jsonwebtoken';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class CheckinController {
  constructor(
    @repository(CheckinRepository.name) private checkinRepo: CheckinRepository,
    @repository(EventRepository.name) private eventRepo: EventRepository,
  ) { }

  @get("/allCheckins")
  async getAllCheckins(
  ): Promise<Array<any>> {
    return await this.checkinRepo.findAllCheckin();
  }

  @get("/checkinId")
  async getSpecificCheckin_Id(
    @param.query.number("checkinId") checkinId: number
  ): Promise<Checkin> {
    // check if a Check In corresponding to checkingId exists

    return await this.checkinRepo.findCheckinId(checkinId);

  }

  @get("/participantCheckins")
  async getParticipantCheckins(
    @param.query.string("participantId") participantId: string
  ): Promise<Array<any>> {

    return await this.checkinRepo.findParticipantCheckin(participantId);

  }

  @get("/eventCheckins")
  async getEventCheckIns(
    @param.query.number("eventId") eventId: number,
  ): Promise<Checkin[]> {

    return await this.checkinRepo.findEventCheckin(eventId);

  }

  @post("/newCheckin")
  async createCheckin(
    @requestBody() checkin: Checkin
  ): Promise<Checkin> {

    let createdCheckin = await this.checkinRepo.create(checkin);
    return createdCheckin;

  }

}
