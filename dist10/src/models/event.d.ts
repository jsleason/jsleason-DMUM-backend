import { Entity } from "@loopback/repository";
export declare class Event extends Entity {
    eventId: number;
    name: string;
    date_range: string;
    time_range: string;
    location: string;
    description: string;
    getId(): any;
}
