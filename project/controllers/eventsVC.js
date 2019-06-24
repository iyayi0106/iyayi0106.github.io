
class eventsViewController {
    constructor() {
        this.contentHTML = "";
    }

    loadData(data){

        var mySelf = this;
        $.each(data, function(key, item) {
            

            var eventsObj = new eventsObject();
            eventsObj.makeContent(item);
            console.log("hey got it = "+eventsObj.title);
            var eventsViewObj = new eventsViewCell();
            mySelf.createContentFromEvent(eventsObj, eventsViewObj);
            
        });

    }

    createContentFromEvent(modelObj, viewObj){
   

        var contentHTML = viewObj.makeEventsViewCell(modelObj.title, 
            modelObj.description, modelObj.datestart, modelObj.dateend, 
            modelObj.timestart, modelObj.timeend, modelObj.contactName, 
            modelObj.contactNumber, modelObj.contactEmail, modelObj.isFree);

        writeToEndOfDiv("main",contentHTML);
    }

}