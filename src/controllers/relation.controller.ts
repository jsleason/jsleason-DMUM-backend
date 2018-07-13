import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Relation } from '../models/relation';
import { repository } from "@loopback/repository";
import { RelationRepository } from "../repositories/relation.repository";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class RelationController {
  constructor(
    @repository(RelationRepository.name) private relationRepo: RelationRepository
  ) { }

  @get("/allRelations")
  async getAllRelations(
  ): Promise<Array<any>> {
    return await this.relationRepo.find();
  }

  @get("/relations/{relationId}")
  async getSpecificRelation(
    @param.path.number("relationId") relationId: number
  ): Promise<Relation> {
    // check if a Check In corresponding to checkingId exists

    return await this.relationRepo.findById(relationId);
    // if (checkinId == "A") {
    //   return "ABC";
    // }

    // if (checkinId == "B") {
    //   return "BCD";
    // }

    // throw new HttpErrors.NotFound("Sorry, relation not found");
  }

  @get("/relationType")
  async getRelation_type(
    @param.query.string("type") type: string
  ): Promise<Relation[]> {
    // check if a Check In corresponding to checkingId exists

    return await this.relationRepo.find({ where: { type } });
    // if (checkinId == "A") {
    //   return "ABC";
    // }

    // if (checkinId == "B") {
    //   return "BCD";
    // }

    // throw new HttpErrors.NotFound("Sorry, relation not found");
  }

  @post("/newRelation")
  async createRelation(
    @requestBody() relation: Relation
  ): Promise<Relation> {

    let createdRelation = await this.relationRepo.create(relation);
    return createdRelation;

  }


}

