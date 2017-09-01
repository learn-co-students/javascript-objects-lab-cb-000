var recipes = { water : '1 cup' }

function updateObjectWithKeyAndValue(inObject, key, value) {
  return Object.assign({}, inObject, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(in_object, key) {
  var new_object = Object.assign({}, in_object)
  delete new_object.key
  return new_object
}

function destructivelyDeleteFromObjectByKey(in_object, key) {
  delete in_object[key]
  return in_object
}
