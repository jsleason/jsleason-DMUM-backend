import { Participant } from "../models/participant";
import { ParticipantRepository } from "../repositories/participant.repository";
export declare class ParticipantController {
    private participantRepo;
    constructor(participantRepo: ParticipantRepository);
    getAllParticipants(): Promise<Array<any>>;
    getSpecificParticipant_Id(participantId: string): Promise<any>;
    getSpecificParticipant_name(name: string): Promise<any>;
    getSpecificParticipant_uniqname(uniqname: string): Promise<any>;
    getSpecificParticipant_team(team: number): Promise<Array<Participant>>;
    createParticipant(participant: Participant): Promise<Participant>;
}
