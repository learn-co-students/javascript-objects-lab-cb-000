var recipes = {
  recipe1: 'ingredient1',
  recipe2: 'ingredient2'
}
function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object, {[key]: value})
  return clone
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}
function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object)
  return delete clone[key]
}
function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
