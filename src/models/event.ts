import { model, property, Entity } from "@loopback/repository";

@model({
  name: "events"
})

export class Event extends Entity {

  @property({
    type: "number",
    id: true
  })
  eventId: number;

  @property({
    type: "string"
  })
  name: string;

  @property({
    type: "string"
  })
  date_range: string;

  @property({
    type: "string"
  })
  time_range: string;

  @property({
    type: "string"
  })
  location: string;

  @property({
    type: "string"
  })
  description: string;

  @property({
    type: "string"
  })
  active: string;

  @property({
    type: "string"
  })
  featured: string;

  getId() {
    return this.id;
  }

}
