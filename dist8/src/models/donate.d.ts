import { Entity } from "@loopback/repository";
export declare class Donate extends Entity {
    donateId: number;
    name: string;
    dancer: string;
    processing: string;
    relationId: number;
    news_email: string;
    employer: string;
    eventId: number;
    getId(): any;
}
