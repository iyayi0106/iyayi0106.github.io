class parksViewCell {
    constructor() {
        this.contentHTML = "";
    }

    makeParksViewCell(name, description, states, designation, directionsInfo, directionsUrl, fullName, url, weatherInfo){


        var directionsStr = "";
        if((directionsUrl != "")&&(typeof directionsUrl !== "undefined")){
            directionsStr = "<a href=\""+directionsUrl+"\">directions</a>";

        }

        this.contentHTML = "<div id=\"viewcell\"><div id=\"title\" style=\"padding: 10px; font-weight: bold;\">"+fullName+"</div>"
        + "<div id=\"middle\">"
        +"<div id=\"description\" style=\"display: inline; width: 500px;clear: both; padding-left: 20px; height: 200px; vertical-align: top;\">"+description
        +"<br><b>Designation: </b>"+designation
        +"<br><b>Directions Info: </b>"+directionsInfo
        +"<br><b>Directions: </b>"+directionsStr
        +"<br><b>Directions: </b>"+weatherInfo
        +"<br><div id=\"link\"  style=\"clear: both;\"><a href=\""+url+"\">"+url+"</a></div><P></P><h2></h2></div>";
    
        console.log("content html  = "+this.contentHTML);
    
        return this.contentHTML;
    }

}