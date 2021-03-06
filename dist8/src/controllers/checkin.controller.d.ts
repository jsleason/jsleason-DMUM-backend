import { Checkin } from "../models/checkin";
import { CheckinRepository } from "../repositories/checkin.repository";
import { EventRepository } from "../repositories/event.repository";
export declare class CheckinController {
    private checkinRepo;
    private eventRepo;
    constructor(checkinRepo: CheckinRepository, eventRepo: EventRepository);
    getAllCheckins(): Promise<Array<any>>;
    getSpecificCheckin_Id(checkinId: number): Promise<Checkin>;
    getParticipantCheckins(participantId: string): Promise<Array<any>>;
    getEventCheckIns(eventId: number): Promise<Checkin[]>;
    createCheckin(checkin: Checkin): Promise<Checkin>;
}
