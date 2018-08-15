import { Entity } from "@loopback/repository";
export declare class PublicCheckin extends Entity {
    eventId: number;
    name: string;
    uniqname: string;
    checkinId: string;
    getId(): any;
}
