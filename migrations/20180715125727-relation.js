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

  db.createTable('relations', {
    relationId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: 'string',
      length: 255
    }
  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('relations', function (err) {
    if (err) return callback(err);

    return callback();
  });

};

exports._meta = {
  "version": 1
};
