import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Event } from '../models/event';
import { promisify } from 'util';
import { HttpErrors } from '@loopback/rest';

export class EventRepository extends DefaultCrudRepository<
  Event,
  typeof Event.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Event, datasource);
  }

  async findAllEvents() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('17R2QymLbIam5gNmVDgyWcjSZwgrx_GWVeRmZxFrJS2k');
    await promisify(doc.useServiceAccountAuth)(require('../../../DMUMAPP-creds.json'))
    const info = await promisify(doc.getInfo)();
    const eventSheet = info.worksheets[2];
    return await promisify(eventSheet.getRows)();
  }

  async findFeaturedEvents(featured: string) {
    let data = await this.findAllEvents();
    for (const row of data) {
      if (row.featured == featured) {
        return row;
      }
    };

    return { success: false };
  }

  async findActiveEvents(active: string) {
    let data = await this.findAllEvents();
    for (const row of data) {
      if (row.active == active) {
        return row;
      }
    };

    return { success: false };
  }

  async findEventId(id: number) {
    let data = await this.findAllEvents();
    for (const row of data) {
      if (row.eventid == id) {
        return row;
      }
    };

    return { success: false };
  }

  async findEventName(name: string) {
    let data = await this.findAllEvents();
    for (const row of data) {
      if (row.name == name) {
        return row;
      }
    };

    return { success: false };
  }

}
