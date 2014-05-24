'use strict';

var adapter = require('level-js');
adapter.adapterName = 'idb-alt';
adapter.valid = function () {
  return 'idb' in window.PouchDB.adapters &&
      window.PouchDB.adapters.idb.valid();
}
adapter.usePrefix = true;

module.exports = adapter;
