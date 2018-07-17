import { DefaultCrudRepository, EntityCrudRepository, CrudRepositoryImpl } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource, Options } from 'loopback-datasource-juggler';
import { Participant } from '../models/participant';
//import { GoogleSheet } from '../google-sheets-wrapper/src/GoogleSheet';
//import * as GoogleSpreadsheet from 'google-spreadsheet';

import { promisify } from 'util';

// export class ParticipantRepository extends DefaultCrudRepository<
//   Participant,
//   typeof Participant.prototype.id
//   >

// {

//   constructor(@inject('datasources.db') protected datasource: DataSource) {
//     super(Participant, datasource);
//   }
// }

// async function accessSpreadsheet() {
//   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
//   await promisify(doc.useServiceAccountAuth)(creds);
//   const info = await promisify(doc.getInfo)();
//   console.log('Loaded doc: ' + info.title);

// }

export class ParticipantRepository extends DefaultCrudRepository<Participant, typeof Participant.prototype.id> {

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Participant, datasource);

  }


  async findAllAlum() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI');
    await promisify(doc.useServiceAccountAuth)(require('../../../service-account.json'))
    const info = await promisify(doc.getInfo)();
    const alumSheet = info.worksheets[1];
    console.log(alumSheet);
    return await promisify(alumSheet.getRows)();
    //return await this.alumSheet.getRows();
  }

  async findAllDancers() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet('1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI');
    await promisify(doc.useServiceAccountAuth)(require('../../../service-account.json'))
    const info = await promisify(doc.getInfo)();
    const dancerSheet = info.worksheets[2];
    console.log(dancerSheet);
    return await promisify(dancerSheet.getRows)();
  }

  async findIndividual_name(name: string) {
    let dancerData = await this.findAllDancers();

    for (const row of dancerData) {
      console.log(row.fullname)
      if (row.fullname == name) {
        console.log(name);
        return row;
      }
    };

    let alumData = await this.findAllAlum();

    for (const row of alumData) {
      if (row.fullname == name) {
        return row;
      }
    };

    throw new Error("Participant not found");
  }

  async findIndividual_uniqname(uniqname: string) {
    let dancerData = await this.findAllDancers();

    for (const row of dancerData) {
      console.log(row.uniqname)
      if (row.uniqname == uniqname) {
        console.log(uniqname);
        return row;
      }
    };

    let alumData = await this.findAllAlum();

    for (const row of alumData) {
      console.log(row.uniqname)
      if (row.uniqname == uniqname) {
        console.log(uniqname);
        return row;
      }
    };

    throw new Error("Participant not found");
  }


  async findTeam(team: any) {
    let dancerData = await this.findAllDancers();
    let members = Array<any>();

    for (const row of dancerData) {
      console.log(row)
      if (row.orgteam == team) {
        console.log(team);
        members.push(row);
      }
      else if (row.dcteam == team) {
        console.log(team);
        members.push(row);
      }
      else if (row.dcorgteam == team) {
        console.log(team);
        members.push(row);
      }
      else if (row.notlistedorgteam == team) {
        console.log(team);
        members.push(row);
      }
    };

    let alumData = await this.findAllAlum();

    for (const row of alumData) {
      console.log(row.team)
      if (row.orgteam == team) {
        console.log(team);
        members.push(row);
      }
      else if (row.dcteam == team) {
        console.log(team);
        members.push(row);
      }
      else if (row.dcorgteam == team) {
        console.log(team);
        members.push(row);
      }
      else if (row.notlistedorgteam == team) {
        console.log(team);
        members.push(row);
      }
    };

    if (members.length == 0) {
      throw new Error("No Participants on team");
    }
    console.log(members);
    return members;
  }

  async findId(participantId: any) {
    this.findIndividual_uniqname(participantId);

    let dancerData = await this.findAllDancers();

    for (const row of dancerData) {
      console.log(row.umidnumber)
      if (row.umidnumber == participantId) {
        return row;
      }
    };

    let alumData = await this.findAllAlum();

    for (const row of alumData) {
      console.log(row.umidnumber)
      if (row.umidnumber == participantId) {
        return row;
      }
    };

    throw new Error("Participant not found");
  }

}
