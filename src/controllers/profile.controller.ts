import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Profile } from "../models/profile";
import { repository } from "@loopback/repository";
import { ProfileRepository } from "../repositories/profile.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ProfileController {
  constructor(
    @repository(ProfileRepository.name) private profileRepo: ProfileRepository
  ) { }

  @get("/allProfiles")
  async getAllProfiles(
  ): Promise<Array<any>> {
    return await this.profileRepo.findAllProfiles();
  }

  @get("/eventProfileId")
  async getSpecificEventProfile(
    @param.query.number("eventId") eventId: number
  ): Promise<any> {
    try { return await this.profileRepo.findEventProfile(eventId); }
    catch (err) {
      throw new HttpErrors.NotFound('Profile not found');
    }

  }

  @post("/newProfile")
  async createProfile(
    @requestBody() profile: Profile
  ): Promise<Profile> {

    let createdProfile = await this.profileRepo.create(profile);
    return createdProfile;

  }


}
