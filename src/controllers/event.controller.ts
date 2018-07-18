import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Event } from "../models/event";
import { repository } from "@loopback/repository";
import { EventRepository } from "../repositories/event.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class EventController {
  constructor(
    @repository(EventRepository.name) private eventRepo: EventRepository
  ) { }

  @get("/allEvents")
  async getAllEvents(
  ): Promise<Array<any>> {
    return await this.eventRepo.find();
  }

  @get("/featuredEvents")
  async getfeatured(
    @param.query.string("active") active: string
  ): Promise<any> {
    return await this.eventRepo.findOne({ where: { active } });

    //throw new HttpErrors.NotFound("Sorry, event not found");
  }

  @get("/eventId")
  async getSpecificEvent_Id(
    @param.query.number("eventId") eventId: number
  ): Promise<any> {
    return await this.eventRepo.findOne({ where: { eventId } });

    // throw new HttpErrors.NotFound("Sorry, event not found");
  }

  @get("/eventName")
  async getSpecificEvent_name(
    @param.query.string("name") name: string
  ): Promise<any> {
    return await this.eventRepo.findOne({ where: { name } });

    //throw new HttpErrors.NotFound("Sorry, event not found");
  }

  @post("/newEvent")
  async createEvent(
    @requestBody() event: Event
  ): Promise<Event> {

    let createdEvent = await this.eventRepo.create(event);
    return createdEvent;

  }


}
