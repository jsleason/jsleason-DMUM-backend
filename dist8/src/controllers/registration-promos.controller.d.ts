import { RegistrationPromos } from "../models/registration-promos";
import { RegistrationPromosRepository } from "../repositories/registration-promos.repository";
export declare class RegistrationPromosController {
    private registrationPromosRepo;
    constructor(registrationPromosRepo: RegistrationPromosRepository);
    getAllPromos(): Promise<Array<any>>;
    getSpecificPromo_Id(registrationPromoId: number): Promise<any>;
    getSpecificPromo_title(title: string): Promise<any>;
    createPromo(promo: RegistrationPromos): Promise<RegistrationPromos>;
}
