class campgroundsViewCell {
    constructor() {
        this.contentHTML = "";
    }

    makeCampgroundsViewCell(name, description, wheelchairAccess, cellPhoneReception, internetConnectivity, phoneNumber, emailAddress, directionsUrl, 
        latitude, longitude, operatingHours, addressLine1, city1, state1, postcode1)
    {


        var address = "";
        if(addressLine1 != ""){

            address = addressLine1+", "+city1+", "+state1+" "+postcode1;
        }
        
        var mapStr = "";

        console.log("=> lat = "+latitude);
        if((latitude != "")&&(typeof latitude !== "undefined")){

            var gMapsLink = "http://www.google.com/maps/place/"+latitude+","+longitude;
        
            mapStr = "<br><b>Map: </b> <a href=\""+gMapsLink+"\" target=\"_blank\">Click to Open in Google Maps</a>";

            console.log("=> made mapstr = "+mapStr);

        }

        var directionsStr = "";
        if((directionsUrl != "")&&(typeof directionsUrl !== "undefined")){
            directionsStr = "<br><b>Directions: </b><a href=\""+directionsUrl+"\">directions</a>";

        }

        var addressStr = "";
        if((address != "")
            &&(typeof address !== "undefined")){
            
                addressStr = "<br><b>Address: </b>"+address;

        }

        var contactStr = "";
        if((phoneNumber != "")
            &&(typeof phoneNumber !== "undefined")){
            
                contactStr = "<br><b>Contact phone: </b>"+phoneNumber;

        }

        var emailStr = "";
        if((emailAddress != "")
            &&(typeof emailAddress !== "undefined")){
            
                emailStr = "<b>Contact email: </b><a href=\"mailto:"+emailAddress+"\">"+emailAddress+"</a>";

        }

        var operatingHoursStr = "";
        if((operatingHours != "")
            &&(typeof operatingHours !== "undefined")){
            
                operatingHoursStr = "<br><b>Hours Open: </b>"+operatingHours;
        }

        var hasCellPhoneReception = "YES";
        if(cellPhoneReception == false){
            hasCellPhoneReception = "NO";
        }
        var hasInternetConnectivity = "YES";
        if(internetConnectivity == false){
            hasInternetConnectivity = "NO";
        }
        
        this.contentHTML = "<div id=\"viewcell\"><div id=\"title\" style=\"padding: 10px; font-weight: bold;\">"+name+"</div>"
        + "<div id=\"middle\">"
        +"<div id=\"description\" style=\"display: inline; width: 500px;clear: both; padding-left: 20px; height: 200px; vertical-align: top;\">"+description
        +operatingHoursStr
        +addressStr
        +mapStr
        +directionsStr
        +"<br><b>WheelChair Access: </b>"+wheelchairAccess
        +"<br><b>Cell Phone Reception: </b>"+hasCellPhoneReception
        +"<br><b>Internet Available: </b>"+hasInternetConnectivity
        +contactStr
        +"</div></div>"
        +"<br><div id=\"link\"  style=\"clear: both;\">"
        +emailStr
        +"</div><P></P><h2></h2></div>";
    
    
        return this.contentHTML;
    }

}