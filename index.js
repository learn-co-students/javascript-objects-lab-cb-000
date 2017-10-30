const recipes = { pbCookies: ["pb", "eggs", "flower", "heat"] };

var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value });
};

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign(object, { [key]: value });
};

var deleteFromObjectByKey = (object, key) => {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
};

var destructivelyDeleteFromObjectByKey = (object, key) => delete object[key];
