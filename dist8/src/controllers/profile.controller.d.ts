import { Profile } from "../models/profile";
import { ProfileRepository } from "../repositories/profile.repository";
export declare class ProfileController {
    private profileRepo;
    constructor(profileRepo: ProfileRepository);
    getAllProfiles(): Promise<Array<any>>;
    getSpecificEventProfile(eventId: number): Promise<any>;
    createProfile(profile: Profile): Promise<Profile>;
}
