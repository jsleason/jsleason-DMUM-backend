import { DefaultCrudRepository, EntityCrudRepository, CrudRepositoryImpl } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource, Options } from 'loopback-datasource-juggler';
import { Participant } from '../models/participant';
import { GoogleSheet } from '../google-sheets-wrapper/src/GoogleSheet';
//import { GoogleSheet } from '../google-sheets-wrapper/node_modules/@types/node/package.json';


// import * as GoogleSpreadsheet from 'google-spreadsheet';

// export class ParticipantRepository extends DefaultCrudRepository<
//   Participant,
//   typeof Participant.prototype.id
//   >

// {

//   constructor(@inject('datasources.db') protected datasource: DataSource) {
//     super(Participant, datasource);
//   }
// }

export class ParticipantRepository extends DefaultCrudRepository<Participant, typeof Participant.prototype.id> {

  private dancerSheet: any;
  private alumSheet: any;

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Participant, datasource);

    this.dancerSheet = new GoogleSheet({
      sheetId: '1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI',
      range: "'Dancer Master'!A:AN"
    });

    this.alumSheet = new GoogleSheet({
      sheetId: '1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI',
      range: "'Alumni Dancer Registration'!A:E"
    })

    // this.doc = new GoogleSpreadsheet('1GryksTDVGcPv_gI3SjMNQTdUgDmQfJUO9WnWnN1OhKI');
    // this.doc.createServiceAccountAuth({
    //   client_email: "",
    //   private_key: ""
    // });
  }

  async findAllAlum() {
    return await this.alumSheet.getRows();
  }

  async findAllDancers() {
    return await this.dancerSheet.getRows();
  }

  async findIndividual_name(name: string) {
    let dancerData = await this.findAllDancers();

    dancerData.forEach((item: any) => {
      if (item.full_name == name) {
        return item;
      }
    });

    let alumData = await this.findAllAlum();

    alumData.forEach((item: any) => {
      if (item.full_name == name) {
        return item;
      }
    });

    throw new Error("Participant not found");
  }

  //async function setAuth(step) {
  //var creds = require('./credentials.json');
  //}

  // async function getInfoAndWorksheets(step) {
  //   doc.getInfo(function (err, info) {
  //     console.log('Loaded doc: ' + info.title + ' by ' + info.author.email)
  //     dancerSheet = info.worksheets[2];
  //     alumSheet = info.worksheets[1];
  //     step();
  //   })
  // }

  // async findById(id: string, options?: Options): Promise<Participant> {

  //   return new Promise((resolve, reject) => {

  //     this.doc.getInfo((err: Error, info: any) => {
  //       if (err) return reject(err);

  //       this.dancerSheet = info.worksheets[2];
  //       this.alumSheet = info.worksheets[1];

  //       this.dancerSheet.getRows({
  //         offset: 4,
  //       }, function (err: Error, rows: any) {
  //         if (err) return reject(err);

  //         rows.forEach((row: any) => {
  //           if (row.value == id) {
  //             return resolve(row);
  //           }
  //         });

  //         this.alumSheet.getRows({
  //           offset: 4,
  //         }, function (err: Error, rows: any) {
  //           if (err) return reject(err);

  //           rows.forEach((row: any) => {
  //             if (row.value == id) {
  //               return resolve(row);
  //             }
  //           });
  //           reject(new Error("no participant found with that id - proceed to registration"));
  //         });
  //       });

  //     });
  //   }) as Promise<Participant>;

  //   // findById(1).then(data => {}).catch(err => {});
  //   // var data = await findById(1);
  // }

  // async findByName(name: string, options?: Options): Promise<Participant[]> {
  //   return new Promise((resolve, reject) => {
  //     let array1 = new Array<Participant>();
  //     this.doc.getInfo((err: Error, info: any) => {
  //       if (err) return reject(err);

  //       this.dancerSheet = info.worksheets[2];
  //       this.alumSheet = info.worksheets[1];

  //       this.dancerSheet.getRows({
  //         offset: 4,
  //       }, function (err: Error, rows: any) {
  //         if (err) return reject(err);

  //         rows.forEach((row: any) => {
  //           if (row.value == name) {
  //             array1.push(row);
  //           }
  //         });

  //         this.alumSheet.getRows({
  //           offset: 4,
  //         }, function (err: Error, rows: any) {
  //           if (err) return reject(err);

  //           rows.forEach((row: any) => {
  //             if (row.value == name) {
  //               array1.push(row);
  //             }
  //           });
  //           resolve(array1);
  //           reject(new Error("no participant found with that id - proceed to registration"));
  //         });
  //       });

  //     });
  //   }) as Promise<Participant[]>;
  // }

  // Override `deleteAll` to disable the operation
  // deleteAll(where?: Where, options?: Options) {
  //   return Promise.reject(new Error('deleteAll is disabled'));
  // }
}
