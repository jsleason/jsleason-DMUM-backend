import { Relation } from '../models/relation';
import { RelationRepository } from "../repositories/relation.repository";
export declare class RelationController {
    private relationRepo;
    constructor(relationRepo: RelationRepository);
    getAllRelations(): Promise<Array<any>>;
    getSpecificRelation(relationId: number): Promise<Relation>;
    getRelation_type(type: string): Promise<Relation[]>;
    createRelation(relation: Relation): Promise<Relation>;
}
