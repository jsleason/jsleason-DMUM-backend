import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { RegistrationPromos } from "../models/registration-promos";
import { repository } from "@loopback/repository";
import { RegistrationPromosRepository } from "../repositories/registration-promos.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class RegistrationPromosController {
  constructor(
    @repository(RegistrationPromosRepository.name) private registrationPromosRepo: RegistrationPromosRepository
  ) { }

  @get("/allRegistrationPromos")
  async getAllPromos(
  ): Promise<Array<any>> {
    return await this.registrationPromosRepo.find();
  }

  @get("/registrationPromoId")
  async getSpecificPromo_Id(
    @param.query.number("registrationPromoId") registrationPromoId: number
  ): Promise<any> {
    return await this.registrationPromosRepo.findOne({ where: { registrationPromoId } });

  }

  @get("/registrationPromoTitle")
  async getSpecificPromo_title(
    @param.query.string("title") title: string
  ): Promise<any> {
    return await this.registrationPromosRepo.find({ where: { title } });

  }

  @post("/newRegistrationPromos")
  async createPromo(
    @requestBody() participant: RegistrationPromos
  ): Promise<RegistrationPromos> {

    let createdPromo = await this.registrationPromosRepo.create(RegistrationPromos);
    return createdPromo;

  }

}
