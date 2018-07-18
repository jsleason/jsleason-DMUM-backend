import { Entity } from "@loopback/repository";
export declare class SponsorPromos extends Entity {
    sponsorPromoId: number;
    title: string;
    link: string;
    code: string;
    imgsrc: string;
    getId(): any;
}
