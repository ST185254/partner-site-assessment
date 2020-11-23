checkProperties = (responseObject, propertiesList ) => {
    for(var i=0; i< propertiesList.length; i++){
        if(checkIfPropertyExists(responseObject, propertiesList[i])){

        }
    }

}

checkIfPropertyExists = (responseObject, propertyName) => {
    return responseObject.hasOwnProperty(propertyName);
}