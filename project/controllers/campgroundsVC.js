class campgroundsViewController {
    constructor() {
       
    }

    loadData(data){

        var mySelf = this;
        $.each(data, function(key, item) {
            

            var campgroundsObj = new campgroundsObject();
            campgroundsObj.makeContent(item);
            console.log("hey got it = "+campgroundsObj.name);
            var campgroundsViewObj = new campgroundsViewCell();
            mySelf.createContentFromCampground(campgroundsObj, campgroundsViewObj);
            
        });

    }

    createContentFromCampground(modelObj, viewObj){
   

        var contentHTML = viewObj.makeCampgroundsViewCell(modelObj.name, modelObj.description, 
            modelObj.wheelchairAccess, modelObj.cellPhoneReception, modelObj.internetConnectivity, 
            modelObj.phoneNumber, modelObj.emailAddress, modelObj.directionsUrl, modelObj.latitude, 
            modelObj.longitude, modelObj.operatingHours, modelObj.addressLine1, modelObj.city1, 
            modelObj.state1, modelObj.postcode1);
        writeToEndOfDiv("main",contentHTML);
    }

}