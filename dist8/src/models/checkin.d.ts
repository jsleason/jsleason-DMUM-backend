import { Entity } from "@loopback/repository";
export declare class Checkin extends Entity {
    eventId: number;
    participantId: string;
    checkinId: string;
    getId(): any;
}
