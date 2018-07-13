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
    return await this.checkinRepo.find();
  }

  @get("/checkinId")
  async getSpecificCheckin_Id(
    @param.query.number("checkinId") checkinId: number
  ): Promise<Checkin> {
    // check if a Check In corresponding to checkingId exists

    return await this.checkinRepo.findById(checkinId);
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

    return await this.checkinRepo.find({ where: { participantId } });

    //throw new HttpErrors.NotFound("Sorry, checkin not found");
  }

  @get("/eventCheckins")
  async getEventCheckIns(
    @param.query.number("eventId") eventId: number,
  ): Promise<Checkin[]> {
    // called like /checkins?eventId=<input>
    // TODO: check if a Check In corresponding to checkingId exists

    // Get all checkin corresponding to a specific event ID

    return await this.checkinRepo.find({ where: { eventId } });

    // throw new HttpErrors.NotFound("Sorry, checkin not found");
  }

  @post("/newCheckin")
  async createCheckin(
    @requestBody() checkin: Checkin
  ): Promise<Checkin> {

    let createdCheckin = await this.checkinRepo.create(checkin);
    return createdCheckin;

  }


  // sign({
  //   user: user
  // }, 'shh', {
  //   issuer: 'auth.ix.co.za',
  //   audience: 'ix.co.za'
  // });


}
