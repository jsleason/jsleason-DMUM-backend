import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Event } from '../models/event';
export declare class EventRepository extends DefaultCrudRepository<Event, typeof Event.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
