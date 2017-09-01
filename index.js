var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
	return Object.assign({}, obj, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
	object[key] = value
	return object;
}

function deleteFromObjectByKey(object, key){
	var temp = { key };
	var newTemp = object;
	delete newTemp.temp
	return newTemp;

}

function destructivelyDeleteFromObjectByKey(object, key){
	delete object[key]
	return object;
}