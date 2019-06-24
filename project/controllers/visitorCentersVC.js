class visitorCentersViewController {
    constructor() {
       
    }

    loadData(data){

        var mySelf = this;
        $.each(data, function(key, item) {
            

            var visitorCentersObj = new visitorCentersObject();
            visitorCentersObj.makeContent(item);
            console.log("hey got it = "+visitorCentersObj.name);
            var visitorCentersViewObj = new visitorCentersViewCell();
            mySelf.createContentFromVisitorCenter(visitorCentersObj, visitorCentersViewObj);
            
        });

    }

    createContentFromVisitorCenter(modelObj, viewObj){
   

        var contentHTML = viewObj.makeVisitorCentersViewCell(modelObj.name, modelObj.description, 
            modelObj.latitude, modelObj.longitude, modelObj.directionsInfo, modelObj.directionsUrl, 
            modelObj.url);
        writeToEndOfDiv("main",contentHTML);
    }

}