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
    return await this.publicCheckinRepo.find();
  }

  @get("/publicCheckinId")
  async getSpecificCheckin_Id(
    @param.query.number("checkinId") checkinId: number
  ): Promise<PublicCheckin> {
    // check if a Check In corresponding to checkingId exists

    return await this.publicCheckinRepo.findById(checkinId);
    // if (checkinId == "A") {
    //   return "ABC";
    // }

    // if (checkinId == "B") {
    //   return "BCD";
    // }

    // throw new HttpErrors.NotFound("Sorry, checkin not found");
  }

  @get("/participantCheckins")
  async getParticipantCheckins(
    @param.query.string("participantId") participantId: string
  ): Promise<Array<any>> {
    // check if a Check In corresponding to checkingId exists

    return await this.publicCheckinRepo.find({ where: { participantId } });

    //throw new HttpErrors.NotFound("Sorry, checkin not found");
  }

  @get("/eventCheckins")
  async getEventCheckIns(
    @param.query.number("eventId") eventId: number,
  ): Promise<PublicCheckin[]> {
    // called like /checkins?eventId=<input>
    // TODO: check if a Check In corresponding to checkingId exists

    // Get all checkin corresponding to a specific event ID

    return await this.publicCheckinRepo.find({ where: { eventId } });

    // throw new HttpErrors.NotFound("Sorry, checkin not found");
  }

  @post("/newPublicCheckin")
  async createCheckin(
    @requestBody() publicCheckin: PublicCheckin
  ): Promise<PublicCheckin> {

    let createdCheckin = await this.publicCheckinRepo.create(publicCheckin);
    return createdCheckin;

  }

}
