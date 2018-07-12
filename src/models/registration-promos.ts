import { model, property, Entity } from "@loopback/repository";

@model({
  name: "registration-promos"
})

export class RegistrationPromos extends Entity {

  @property({
    type: "number",
    id: true
  })
  registrationPromoId: number;

  @property({
    type: "string"
  })
  title: string;

  @property({
    type: "string"
  })
  description: string;

  getId() {
    return this.id;
  }

}
