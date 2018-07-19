import { Entity } from "@loopback/repository";
export declare class Profile extends Entity {
    profileId: number;
    eventId: number;
    img_schedule: string;
    img_map: string;
    description: string;
    info1: string;
    info2: string;
    info3: string;
    info4: string;
    info5: string;
    getId(): any;
}
