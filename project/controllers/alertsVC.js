class alertsViewController {
    constructor() {
       
    }

    loadData(data){

        var mySelf = this;
        $.each(data, function(key, item) {
            

            var alertsObj = new alertsObject();
            alertsObj.makeContent(item);
            console.log("hey got it = "+alertsObj.title);
            var alertsViewObj = new alertsViewCell();
            mySelf.createContentFromAlert(alertsObj, alertsViewObj);
            
        });

    }

    createContentFromAlert(modelObj, viewObj){
   

        var contentHTML = viewObj.makeAlertsViewCell(modelObj.title, 
            modelObj.description, modelObj.url, modelObj.category, modelObj.parkCode);
        writeToEndOfDiv("main",contentHTML);
    }

}