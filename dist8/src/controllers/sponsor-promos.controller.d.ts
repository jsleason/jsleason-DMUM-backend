import { SponsorPromos } from "../models/sponsor-promos";
import { SponsorPromosRepository } from "../repositories/sponsor-promos.repository";
export declare class SponsorPromosController {
    private sponsorPromosRepo;
    constructor(sponsorPromosRepo: SponsorPromosRepository);
    getAllPromos(): Promise<Array<any>>;
    getSpecificPromo_Id(sponsorPromoId: number): Promise<any>;
    getSpecificPromo_title(title: string): Promise<any>;
    createPromo(participant: SponsorPromos): Promise<SponsorPromos>;
}
