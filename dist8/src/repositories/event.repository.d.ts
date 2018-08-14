import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Event } from '../models/event';
export declare class EventRepository extends DefaultCrudRepository<Event, typeof Event.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
    findAllEvents(): Promise<any>;
    findFeaturedEvents(featured: string): Promise<any>;
    findActiveEvents(active: string): Promise<any>;
    findEventId(id: number): Promise<any>;
    findEventName(name: string): Promise<any>;
}
