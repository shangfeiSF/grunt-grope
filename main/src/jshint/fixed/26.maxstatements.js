/*
 * maxstatements
 * http://jshint.com/docs/options/#maxstatements
 * This option lets you set the max number of statements allowed per function.
 * */
function maxstatements() {
  var state_1 = 0;
  var state_2 = 0;

  // Function declarations count as one statement.
  // Their bodies don't get taken into account for the outer function.
  function state_3() {
    var state_3_1 = 1;
    var state_3_2 = 1;

    return state_3_1 + state_3_2;
  }

  // state_1 = state_1 + state_2 + state_3();
  return state_1 + state_2 + state_3();
}

maxstatements();