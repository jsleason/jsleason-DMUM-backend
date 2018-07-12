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
    type: "string"
  })
  processing: string;

  @property({
    type: "number"
  })
  relationId: number;

  @property({
    type: "string"
  })
  news_email: string;

  @property({
    type: "string"
  })
  employer: string;

  @property({
    type: "number"
  })
  eventId: number;

  getId() {
    return this.id;
  }

}
