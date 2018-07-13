import { model, property, Entity } from "@loopback/repository";

@model({
  name: "participant"
})

export class Participant extends Entity {

  @property({
    type: "number",
    id: true
  })
  participantId: number;

  @property({
    type: "string",
    id: true
  })
  uniqname: string;

  @property({
    type: "string"
  })
  name: string;

  @property({
    type: "string"
  })
  team: string;

  getId() {
    return this.id;
  }

}
