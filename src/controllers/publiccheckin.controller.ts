import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { PublicCheckin } from "../models/publiccheckin";
import { repository } from "@loopback/repository";
import { PublicCheckinRepository } from "../repositories/publiccheckin.repository";
import { EventRepository } from "../repositories/event.repository";
// import { sign, verify } from 'jsonwebtoken';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class PublicCheckinController {
  constructor(
    @repository(PublicCheckinRepository.name) private publicCheckinRepo: PublicCheckinRepository,
    @repository(EventRepository.name) private eventRepo: EventRepository,
  ) { }

  @get("/allPublicCheckins")
  async getAllCheckins(
  ): Promise<Array<any>> {
    return await this.publicCheckinRepo.findAllPublicCheckin();
  }

  @get("/publicCheckinId")
  async getSpecificCheckin_Id(
    @param.query.number("checkinId") checkinId: number
  ): Promise<PublicCheckin> {
    // check if a Check In corresponding to checkingId exists

    return await this.publicCheckinRepo.findPublicCheckinId(checkinId);
  }

  @get("/participantPublicCheckins")
  async getParticipantCheckins(
    @param.query.string("participantId") participantId: string
  ): Promise<Array<any>> {
    // check if a Check In corresponding to checkingId exists
    let arr = await this.publicCheckinRepo.findPublicParticipantCheckin(participantId);
    if (arr.length == 0) {
      console.log("No Current Promotions");
    }
    return await arr;

    //throw new HttpErrors.NotFound("Sorry, checkin not found");
  }

  @get("/eventPublicCheckins")
  async getEventCheckIns(
    @param.query.number("eventId") eventId: any,
  ): Promise<Array<any>> {
    // called like /checkins?eventId=<input>
    // TODO: check if a Check In corresponding to checkingId exists
    let arr = await this.publicCheckinRepo.findEventPublicCheckin(eventId);
    // Get all checkin corresponding to a specific event ID
    if (arr.length == 0) {
      console.log("No Current Promotions");
    }
    return await arr;
  }

  @post("/newPublicCheckin")
  async createCheckin(
    @requestBody() publicCheckin: PublicCheckin
  ): Promise<PublicCheckin> {
    publicCheckin.checkinId = publicCheckin.uniqname + publicCheckin.eventId;
    let createdCheckin = await this.publicCheckinRepo.createPCheckin(publicCheckin);
    try { return createdCheckin; }
    catch (err) {
      throw new HttpErrors.NotFound('Cannot post public checkin');

    }

  }

}
