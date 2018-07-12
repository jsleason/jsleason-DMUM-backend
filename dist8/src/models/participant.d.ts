import { Entity } from "@loopback/repository";
export declare class Participant extends Entity {
    participantId: number;
    name: string;
    team: string;
    getId(): any;
}
