import { model, property, Entity } from "@loopback/repository";

@model({
  name: "sponsorPromos"
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

  @property({
    type: "string"
  })
  imgsrc: string;

  getId() {
    return this.id;
  }

}
