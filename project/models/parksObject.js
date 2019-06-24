
class parksObject {
    constructor() {
        
        this.id = "";
        this.description = "";
        this.name = "";
        this.states = "";
        this.designation = "";
        this.parkCode = "";
        this.directionsInfo = "";
        this.directionsUrl = "";
        this.fullName = "";
        this.url = "";
        this.weatherInfo = "";
        
    }

    makeContent(dataItem) {
       
        this.id = dataItem.id;
        console.log("Just set artlink = "+this.id);
        this.description = dataItem.description;
        this.name = dataItem.name;
        this.states = dataItem.states;
        this.designation = dataItem.designation;
        this.parkCode = dataItem.parkCode;
        this.directionsInfo = dataItem.directionsInfo;
        this.directionsUrl = dataItem.directionsUrl;
        this.fullName = dataItem.fullName;
        this.url = dataItem.url;
        this.weatherInfo = dataItem.weatherInfo;

    }

}
