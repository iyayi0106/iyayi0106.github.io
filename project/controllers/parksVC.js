class parksViewController {
    constructor() {
       
    }

    loadData(data){

        var mySelf = this;
        $.each(data, function(key, item) {
            

            var parksObj = new parksObject();
            parksObj.makeContent(item);
            console.log("hey got it = "+parksObj.name);
            var parksViewObj = new parksViewCell();
            mySelf.createContentFromPark(parksObj, parksViewObj);
            
        });

    }

    createContentFromPark(modelObj, viewObj){
   

        var contentHTML = viewObj.makeParksViewCell(modelObj.name, modelObj.description, 
            modelObj.states, modelObj.designation, modelObj.directionsInfo, modelObj.directionsUrl, 
            modelObj.fullName, modelObj.url, modelObj.weatherInfo);
        writeToEndOfDiv("main",contentHTML);
    }

}