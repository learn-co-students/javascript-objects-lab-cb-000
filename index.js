var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(obj, key) {
  var returnObj = Object.assign({}, obj)
  delete returnObj[key]
  return returnObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
