var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value})
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}