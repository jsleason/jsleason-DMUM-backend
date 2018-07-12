import { model, property, Entity } from "@loopback/repository";

@model({
  name: "relation"
})

export class Relation extends Entity {

  @property({
    type: "number",
    id: true
  })
  relationId: number;

  @property({
    type: "string"
  })
  type: string;

  getId() {
    return this.id;
  }

}
