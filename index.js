var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var cloned_Obj = Object.assign({} , object, { [key]: value});
  return cloned_Obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var cloned_Obj = Object.assign({}, object);
  delete cloned_Obj[key];
  return cloned_Obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
