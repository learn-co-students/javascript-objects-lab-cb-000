var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value){
  object = Object.assign({}, recipes)
  object[key] = value

  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  object = Object.assign({}, recipes)
  delete object[key]

  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}
