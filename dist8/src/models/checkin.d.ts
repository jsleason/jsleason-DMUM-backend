import { Entity } from "@loopback/repository";
export declare class Checkin extends Entity {
    eventId: number;
    participantId: number;
    checkinId: number;
    getId(): any;
}
