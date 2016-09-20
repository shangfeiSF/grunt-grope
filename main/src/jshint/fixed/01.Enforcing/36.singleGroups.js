/*
 * singleGroups
 * http://jshint.com/docs/options/#singleGroups
 * This option prohibits the use of the grouping operator when it is not strictly required.
 * */
function singleGroups() {
  var obj = {
    version: '1.0'
  };

  var a = typeof obj === 'object';

  delete obj.version;

  return a;
}

singleGroups();