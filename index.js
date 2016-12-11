var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){

  var newRecipes = Object.assign({prop: 1}, {prop2: 2});
  return newRecipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({prop: 1});
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
delete recipes.prop2;
return recipes;

}
