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
  db.createTable('event', {
    eventid: {
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length: 60
    },
    date: {
      type: 'date'
    },
    time: {
      type: 'time'
    },
    location: {
      type: 'string'
    },
    description: {
      type: 'string'
    }
  }, callback);
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
