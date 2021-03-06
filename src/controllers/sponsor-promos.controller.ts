import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { SponsorPromos } from "../models/sponsor-promos";
import { repository } from "@loopback/repository";
import { SponsorPromosRepository } from "../repositories/sponsor-promos.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class SponsorPromosController {
  constructor(
    @repository(SponsorPromosRepository.name) private sponsorPromosRepo: SponsorPromosRepository
  ) { }

  @get("/allSponsorPromos")
  async getAllPromos(
  ): Promise<Array<any>> {
    let arr = await this.sponsorPromosRepo.findAllSPromos();
    if (arr.length == 0) {
      console.log("No Current Promotions");
    }
    return arr;
  }

  @get("/sponsorPromoId")
  async getSpecificPromo_Id(
    @param.query.number("sponsorPromoId") sponsorPromoId: number
  ): Promise<any> {
    return await this.sponsorPromosRepo.findSPromoId(sponsorPromoId);
  }

  @get("/sponsorPromoTitle")
  async getSpecificPromo_title(
    @param.query.string("title") title: string
  ): Promise<any> {
    return await this.sponsorPromosRepo.findSPromoTitle(title);
  }

  @post("/newSponsorPromos")
  async createPromo(
    @requestBody() promo: SponsorPromos
  ): Promise<SponsorPromos> {

    let createdPromo = await this.sponsorPromosRepo.create(promo);
    return createdPromo;

  }

}
