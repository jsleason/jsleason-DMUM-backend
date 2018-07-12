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
  db.addColumn('donate', 'eventId', {
    type: 'int',
    foreignKey: {
      name: 'eventid',
      table: 'event',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: {
        eventId: 'id'
      }
    }

  }, function (err) {
    db.addColumn('bucketDonate', 'eventId', {
      type: 'int',
      foreignKey: {
        name: 'eventid',
        table: 'event',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          eventId: 'id'
        }
      }
    }, callback);
  })
};

exports.down = function (db) {
  db.removeColumn('donate', 'eventId', function (err) {
    db.removeColumn('bucketDonate', 'eventId', callback)
  });
};

exports._meta = {
  "version": 1
};
