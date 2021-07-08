var recipes = {prop: 1 }

function updateObjectWithKeyAndValue(object, key, value){
  var localObject = Object.assign({}, object)
  localObject[key]=value
  return localObject
  //return object.assign(object, {key:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var localObject = Object.assign({}, object)
  return delete localObject[key]
  //return localObject
}

function destructivelyDeleteFromObjectByKey(object,key){
  return delete object[key]
}
