import { model, property, Entity } from "@loopback/repository";

@model({
  name: "donate"
})

export class Donate extends Entity {

  @property({
    type: "number",
    id: true
  })
  donateId: number;

  @property({
    type: "string"
  })
  name: string;

  @property({
    type: "string"
  })
  dancer: string;

  @property({
    type: "number"
  })
  relationId: number;

  @property({
    type: "string"
  })
  news_email: string;

  @property({
    type: "number"
  })
  eventId: number;

  @property({
    type: "number"
  })
  amount: number;

  @property({
    type: "string"
  })
  chargeId: string;

  getId() {
    return this.id;
  }

}
