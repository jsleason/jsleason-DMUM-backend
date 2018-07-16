import { model, property, Entity } from "@loopback/repository";

@model({
  name: "team"
})

export class Teams extends Entity {

  @property({
    type: "number",
    id: true
  })
  teamId: number;

  @property({
    type: "string"
  })
  name: string;

  getId() {
    return this.id;
  }

}
