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
    type: "number",
  })
  participantId: number;

  @property({
    type: "number",
    id: true
  })
  checkinId: number;

  getId() {
    return this.id;
  }

}
