import { model, property, Entity } from "@loopback/repository";

@model({
  name: "checkin"
})

export class Checkin extends Entity {

  @property({
    type: "number",
  })
  eventId: number;

  @property({
    type: "string",
  })
  participantId: string;

  @property({
    type: "string",
    id: true
  })
  checkinId: string;

  getId() {
    return this.id;
  }

}
