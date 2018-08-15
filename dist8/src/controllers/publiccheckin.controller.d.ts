import { PublicCheckin } from "../models/publiccheckin";
import { PublicCheckinRepository } from "../repositories/publiccheckin.repository";
import { EventRepository } from "../repositories/event.repository";
export declare class PublicCheckinController {
    private publicCheckinRepo;
    private eventRepo;
    constructor(publicCheckinRepo: PublicCheckinRepository, eventRepo: EventRepository);
    getAllCheckins(): Promise<Array<any>>;
    getSpecificCheckin_Id(checkinId: number): Promise<PublicCheckin>;
    getParticipantCheckins(participantId: string): Promise<Array<any>>;
    getEventCheckIns(eventId: any): Promise<Array<any>>;
    createCheckin(publicCheckin: PublicCheckin): Promise<PublicCheckin>;
}
