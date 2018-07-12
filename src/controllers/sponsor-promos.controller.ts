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
    return await this.sponsorPromosRepo.find();
  }

  @get("/sponsorPromoId")
  async getSpecificPromo_Id(
    @param.query.number("sponsorPromoId") sponsorPromoId: number
  ): Promise<any> {
    return await this.sponsorPromosRepo.findOne({ where: { sponsorPromoId } });
  }

  @get("/sponsorPromoTitle")
  async getSpecificPromo_title(
    @param.query.string("title") title: string
  ): Promise<any> {
    return await this.sponsorPromosRepo.find({ where: { title } });
  }

  @post("/newSponsorPromos")
  async createPromo(
    @requestBody() participant: SponsorPromos
  ): Promise<SponsorPromos> {

    let createdPromo = await this.sponsorPromosRepo.create(SponsorPromos);
    return createdPromo;

  }

}
