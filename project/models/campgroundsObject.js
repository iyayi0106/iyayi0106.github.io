
class campgroundsObject {
    constructor() {
        
        this.id = "";
        this.name = "";
        this.description = "";
        this.wheelchairAccess = "";
        this.cellPhoneReception = false;
        this.internetConnectivity = false;
        this.laundry = false;
        this.totalSites = "";
        this.tentOnly = 0;
        this.rvOnly = 0;
        this.phoneNumber = "";
        this.emailAddress = "";
        this.directionsUrl = "";
        this.latitude = "";
        this.longitude = "";
        this.operatingHours = "";
        this.parkCode = "";
        this.regulationsUrl = "";
        this.weatherOverview = "";
        this.postcode1 = "";
        this.state1 = "";
        this.city1 = "";
        this.addressLine1 = "";
        this.addressType1 = ""
        this.postcode2 = "";
        this.state2 = "";
        this.city2 = "";
        this.addressLine2 = "";
        this.addressType2 = "";
        this.latLong = "";

        
    }

    makeContent(dataItem) {
       
        this.id = dataItem.id;
        console.log("Just set artlink = "+this.id);
        this.name = dataItem.name;
        this.description = dataItem.description;
        this.wheelchairAccess = dataItem.accessibility.wheelchairAccess;
        this.cellPhoneReception = dataItem.amenities.cellPhoneReception;
        this.internetConnectivity = dataItem.amenities.internetConnectivity;
        this.laundry = dataItem.amenities.laundry;
        this.totalSites = dataItem.campsites.totalsites;
        this.tentOnly = dataItem.campsites.tentonly;
        this.rvOnly = dataItem.campsites.rvonly;
        if(typeof dataItem.contacts !== "undefined"){

            this.phoneNumber = dataItem.contacts.phoneNumbers.phoneNumber;
            this.emailAddress = dataItem.contacts.emailAddresses.emailAddress;
        }
        
        this.directionsUrl = dataItem.directionsUrl;
        
        this.operatingHours = dataItem.operatingHours;
        this.parkCode = dataItem.parkCode;
        this.regulationsUrl = dataItem.regulationsUrl;
        this.weatherOverview = dataItem.weatherOverview;
        if(typeof dataItem.addresses !== "undefined"){

            this.postcode1 = dataItem.addresses[0].postalCode;
            this.state1 = dataItem.addresses[0].stateCode;;
            this.city1 = dataItem.addresses[0].city;
            this.addressLine1 = dataItem.addresses[0].line1;
            this.addressType1 = dataItem.addresses[0].type;
            this.postcode2 = dataItem.addresses[1].postalCode;
            this.state2 = dataItem.addresses[1].stateCode;
            this.city2 = dataItem.addresses[1].city;
            this.addressLine2 = dataItem.addresses[1].line1;
            this.addressType2 = dataItem.addresses[1].type;
        }

        //check if latLong is not empty
        if(dataItem.latLong.indexOf("lat") !== -1){

            this.latLong = dataItem.latLong;
            console.log("Found long lat = "+this.latLong);
            //ex "{lat:63.4574408, lng:-150.8612003}"
            var latLongFound = this.latLong.match(/([\+|\-]?\d+\.\d+)/g);
            console.log("Found array = "+latLongFound+" and length = "+latLongFound.length+"\n latitude = "+this.latitude);
            
            this.latitude = latLongFound[0];
            this.longitude = latLongFound[1];

        }
        
        
        
    }

}