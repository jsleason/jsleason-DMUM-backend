'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {

  db.createTable('donate', {
    donateId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 255
    },
    dancer: {
      type: 'string'
    },
    relationId: {
      type: 'int'
    },
    email: {
      type: 'string'
    },
    eventId: {
      type: 'int'
    },
    amount: {
      type: 'decimal'
    },
    chargeId: {
      type: 'string'
    }
  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('donate', function (err) {
    if (err) return callback(err);

    return callback();
  });

};

exports._meta = {
  "version": 1
};
