class visitorCentersViewCell {
    constructor() {
        this.contentHTML = "";
    }

    makeVisitorCentersViewCell(name, description, latitude, longitude, directionsInfo, directionsUrl, url){

        var mapStr = "";
        if((latitude != "")&&(typeof latitude !== "undefined")){

            var gMapsLink = "http://www.google.com/maps/place/"+latitude+","+longitude;
        
            mapStr = "<br><b>Map: </b> <a href=\""+gMapsLink+"\">"+latitude+", "+longitude+"</a>";


        }

        var directionsStr = "";
        if((directionsUrl != "")&&(typeof directionsUrl !== "undefined")){
            directionsStr = "<a href=\""+directionsUrl+"\">directions</a>";

        }
        
        this.contentHTML = "<div id=\"viewcell\"><div id=\"title\" style=\"padding: 10px; font-weight: bold;\">"+name+"</div>"
        + "<div id=\"middle\">"
        +"<div id=\"description\" style=\"display: inline; width: 500px;clear: both; padding-left: 20px; height: 200px; vertical-align: top;\">"+description
        +mapStr
        +"<br><b>Directions Info: </b>"+directionsInfo
        +"<br><b>Directions: </b>"+directionsStr
        +"<br><div id=\"link\"  style=\"clear: both;\"><a href=\""+url+"\">"+url+"</a></div><P></P><h2></h2></div>";
    
        return this.contentHTML;
    }

}