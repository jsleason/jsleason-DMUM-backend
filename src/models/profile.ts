import { model, property, Entity } from "@loopback/repository";

@model({
  name: "profile"
})

export class Profile extends Entity {

  @property({
    type: "number",
    id: true
  })
  profileId: number;

  @property({
    type: "number",
  })
  eventId: number;

  @property({
    type: "string"
  })
  img_schedule: string;

  @property({
    type: "string"
  })
  img_map: string;

  @property({
    type: "string"
  })
  description: string;

  @property({
    type: "string"
  })
  info1: string;

  @property({
    type: "string"
  })
  info2: string;

  @property({
    type: "string"
  })
  info3: string;

  @property({
    type: "string"
  })
  info4: string;

  @property({
    type: "string"
  })
  info5: string;

  getId() {
    return this.id;
  }

}
