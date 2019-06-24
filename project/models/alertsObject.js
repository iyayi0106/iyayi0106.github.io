
/**
 * Alerts Object
 */

class alertsObject {
    constructor() {
        this.category = "";
        this.url = "";
        this.id = "";
        this.description = "";
        this.parkCode = "";
        this.title = "";
        
    }

    makeContent(dataItem) {
        this.category = dataItem.category;
        console.log(" ------ NEW just set articletitles = "+this.category);
        this.url = dataItem.url;
        console.log("Just set artlink = "+this.url);
        this.id = dataItem.id;
        console.log("Just set artlink = "+this.id);
        this.description = dataItem.description;
        this.parkCode = dataItem.parkCode;
        this.title = dataItem.title;

        console.log("Title = "+this.title+" and alt = "+this.parkCode);

    }

}

