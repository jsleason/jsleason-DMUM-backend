import { model, property, Entity } from "@loopback/repository";

@model({
  name: "sponsor-promos"
})

export class SponsorPromos extends Entity {

  @property({
    type: "number",
    id: true
  })
  sponsorPromoId: number;

  @property({
    type: "string"
  })
  title: string;

  @property({
    type: "string"
  })
  link: string;

  @property({
    type: "string"
  })
  code: string;

  getId() {
    return this.id;
  }

}
