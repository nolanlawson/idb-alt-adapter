'use strict';

var leveldown = require('level-js');
leveldown.adapterName = 'idb-alt';
leveldown.valid = function () {
  return 'idb' in window.PouchDB.adapters &&
      window.PouchDB.adapters.idb.valid();
}
leveldown.usePrefix = true;

module.exports = leveldown;
