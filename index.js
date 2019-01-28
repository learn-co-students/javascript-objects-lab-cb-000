var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(obj, k) {
  var new_object = {}
  Object.assign(new_object, obj)
  delete new_object[k]
  return new_object
}

function destructivelyDeleteFromObjectByKey(obj, k) {
  delete obj[k]
  return obj
}
