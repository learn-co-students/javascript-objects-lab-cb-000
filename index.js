var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj_clone = Object.assign({}, object)
  delete obj_clone[key]
  return obj_clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
