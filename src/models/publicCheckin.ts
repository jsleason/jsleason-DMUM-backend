import { model, property, Entity } from "@loopback/repository";

@model({
  name: "publicCheckin"
})

export class PublicCheckin extends Entity {

  @property({
    type: "number",
  })
  eventId: number;

  @property({
    type: "string",
  })
  name: string;

  @property({
    type: "string",
  })
  uniqname: string;

  @property({
    type: "number",
    id: true
  })
  checkinId: number;

  getId() {
    return this.id;
  }

}
