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

  db.createTable('registrationPromos', {
    registrationPromoId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: 'string',
      length: 255
    },
    description: {
      type: 'string'
    }
  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('registrationPromos', function (err) {
    if (err) return callback(err);

    return callback();
  });

};

exports._meta = {
  "version": 1
};
