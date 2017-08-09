let recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let rObject = {}
  Object.assign(rObject, object);
  rObject[key] = value;
  return rObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  let rObject = {};
  Object.assign(rObject, object);
  delete rObject[key];
  return rObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
