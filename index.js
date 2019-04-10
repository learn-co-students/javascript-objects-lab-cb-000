var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var new_obj = Object.assign({}, object, {[key]: value})
  return new_obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
  return Object.assign({}, object, {[key]: undefined} )
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
