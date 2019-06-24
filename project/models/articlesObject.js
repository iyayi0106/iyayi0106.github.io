
/**
 * Article Object
 */

class articleObject {
    constructor() {
        this.title = "";
        this.url = "";
        this.id = "";
        this.description = "";
        this.photoUrl = "";
        this.altText = "";
    }

    makeContent(dataItem) {
        this.title = dataItem.title;
        console.log(" ------ NEW just set articletitles = "+this.title);
        this.url = dataItem.url;
        console.log("Just set artlink = "+this.url);
        this.id = dataItem.id;
        console.log("Just set artlink = "+this.id);
        this.description = dataItem.listingdescription;
        this.photoUrl = dataItem.listingimage.url;
        this.altText = dataItem.listingimage.altText;

        console.log("PHotourl = "+this.photoUrl+" and alt = "+this.altText);

    }

}
