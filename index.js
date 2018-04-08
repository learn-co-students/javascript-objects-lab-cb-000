var recipes = {};

// Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// Objects updateObjectWithKeyAndValue(object, key, value) does not modify the original object, but rather returns a clone with the new data
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]: value});
  return newObj;
}

/*
  The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
  It will return the target object.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/


// Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive)
// Objects deleteFromObjectByKey(object, key) does not modify the original object
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

// Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair
// destructivelyDeleteFromObjectByKey(object, key) modifies the original object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
