var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  //return object with original key value pairs and new key value pair
  //doesn't modify original object
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //updates object w key and value --- destructive
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  //returns object without key value pair & modifies original object
  delete object[key]
  return object
}
