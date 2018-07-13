import { Entity } from "@loopback/repository";
export declare class Donate extends Entity {
    donateId: number;
    name: string;
    dancer: string;
    relationId: number;
    news_email: string;
    eventId: number;
    amount: number;
    chargeId: string;
    getId(): any;
}
