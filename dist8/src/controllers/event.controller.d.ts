import { Event } from "../models/event";
import { EventRepository } from "../repositories/event.repository";
export declare class EventController {
    private eventRepo;
    constructor(eventRepo: EventRepository);
    getAllEvents(): Promise<Array<any>>;
    getfeatured(active: string): Promise<any>;
    getSpecificEvent_Id(eventId: number): Promise<any>;
    getSpecificEvent_name(name: string): Promise<any>;
    createEvent(event: Event): Promise<Event>;
}
