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
    return await this.eventRepo.findAllEvents();
  }

  @get("/featuredEvents")
  async getFeatured(
  ): Promise<Array<any>> {
    return await this.eventRepo.findFeaturedEvents("Y");

    //throw new HttpErrors.NotFound("Sorry, event not found");
  }

  @get("/activeEvents")
  async getActive(
  ): Promise<Array<any>> {
    return await this.eventRepo.findActiveEvents("Y");

    //throw new HttpErrors.NotFound("Sorry, event not found");
  }

  @get("/eventId")
  async getSpecificEvent_Id(
    @param.query.number("eventId") eventId: number
  ): Promise<any> {
    return await this.eventRepo.findEventId(eventId);

    // throw new HttpErrors.NotFound("Sorry, event not found");
  }

  @get("/eventName")
  async getSpecificEvent_name(
    @param.query.string("name") name: string
  ): Promise<any> {
    return await this.eventRepo.findEventName(name);

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
