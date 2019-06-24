
class visitorCentersObject {
    constructor() {
        
        this.id = "";
        this.description = "";
        this.name = "";
        this.latitude = "";
        this.longitude = "";
        this.parkCode = "";
        this.directionsInfo = "";
        this.directionsUrl = "";
        this.url = "";

        
    }

    makeContent(dataItem) {
       
        this.id = dataItem.id;
        console.log("Just set artlink = "+this.id);
        this.description = dataItem.description;
        this.name = dataItem.name;
        this.latitude = dataItem.latLong.lat;
        this.longitude = dataItem.latLong.lng;
        this.parkCode = dataItem.parkCode;
        this.directionsInfo = dataItem.directionsInfo;
        this.directionsUrl = dataItem.directionsUrl;
        this.url = dataItem.url;
        
    }

}
