import { Donate } from "../models/donate";
import { DonateRepository } from "../repositories/donate.repository";
export declare class DonateController {
    private donateRepo;
    constructor(donateRepo: DonateRepository);
    getAllDonations(): Promise<Array<any>>;
    getSpecificDonation(donateId: number): Promise<Donate>;
    getDonations_byName(name: string): Promise<Donate[]>;
    getDonation_toDancer(dancer: string): Promise<Donate[]>;
    getDonation_relation(relationId: number): Promise<Donate[]>;
    getEventDonations(eventId: number): Promise<Array<any>>;
    createDonate(donate: Donate): Promise<Donate>;
}
