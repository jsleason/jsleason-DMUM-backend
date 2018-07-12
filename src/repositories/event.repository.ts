import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Event } from '../models/event';

export class EventRepository extends DefaultCrudRepository<
  Event,
  typeof Event.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Event, datasource);
  }
}
