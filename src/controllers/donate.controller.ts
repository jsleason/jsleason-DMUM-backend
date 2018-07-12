import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Donate } from "../models/donate";
import { repository } from "@loopback/repository";
import { DonateRepository } from "../repositories/donate.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class DonateController {
  constructor(
    @repository(DonateRepository.name) private donateRepo: DonateRepository
  ) { }

  @get("/allDonations")
  async getAllDonations(
  ): Promise<Array<any>> {
    return await this.donateRepo.find();
  }

  @get("/donationId")
  async getSpecificDonation(
    @param.query.number("donateId") donateId: number
  ): Promise<Donate> {
    // check if a Check In corresponding to checkingId exists

    return await this.donateRepo.findById(donateId);

    //throw new HttpErrors.NotFound("Sorry, donation not found");
  }

  @get("/nameDonations")
  async getDonations_byName(
    @param.query.string("name") name: string
  ): Promise<Donate[]> {
    // check if a Check In corresponding to checkingId exists

    return await this.donateRepo.find({ where: { name } });

    //throw new HttpErrors.NotFound("Sorry, donation not found");
  }

  @get("/dancerDonations")
  async getDonation_toDancer(
    @param.query.string("dancer") dancer: string
  ): Promise<Donate[]> {
    // check if a Check In corresponding to checkingId exists

    return await this.donateRepo.find({ where: { dancer } });

    // throw new HttpErrors.NotFound("Sorry, donation not found");
  }

  @get("/donationsRelation")
  async getDonation_relation(
    @param.query.number("relationId") relationId: number
  ): Promise<Donate[]> {
    // check if a Check In corresponding to checkingId exists

    return await this.donateRepo.find({ where: { relationId } });

    //throw new HttpErrors.NotFound("Sorry, donation not found");
  }

  @get("/eventDonations")
  async getEventDonations(
    @param.query.number("eventId") eventId: number
  ): Promise<Array<any>> {
    return await this.donateRepo.find({ where: { eventId } });

    // throw new HttpErrors.NotFound("Sorry, event not found");
  }

  @post("newDonation")
  async createDonate(
    @requestBody() donate: Donate
  ): Promise<Donate> {

    let createdDonate = await this.donateRepo.create(donate);
    return createdDonate;

  }


}
