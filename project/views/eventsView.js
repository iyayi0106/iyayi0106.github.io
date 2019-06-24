
class eventsViewCell {
    constructor() {
        this.contentHTML = "";
    }

    makeEventsViewCell(title, description, datestart, dateend, timestart, timeend, contactName, contactNumber, contactEmail, isFree){

        var isFreeStr = "NO";
        if(isFree == true){
            isFreeStr = "YES";
        }
        this.contentHTML = "<div id=\"viewcell\"><div id=\"title\" style=\"padding: 10px; font-weight: bold;\">"+title+"</div>"
        + "<div id=\"middle\">"
        +"<div id=\"photo\" style=\"max-width: 150px; float: left; height: 100px\"><img src=\"images/events.png\" alt=\"alert\" style=\"max-width: 100px; padding-left: 10px; padding-right: 10px;\"></div>"
        +"<div id=\"description\" style=\"display: inline; width: 500px;clear: both; padding-left: 20px; height: 200px; vertical-align: top;\">"+description
        +"<br><b>Date: "+datestart+" to "+dateend+"</b><br><b>Time: "+timestart+" - "+timeend+"</b><br><b>Contact Name: "+contactName
        +"</b><br><b>Free Event: </b>"+isFreeStr
        +"</b><br><b>Contact phone: </b>"+contactNumber+"</div></div>"
        +"<br><div id=\"link\"  style=\"clear: both;\"><b>Contact email: </b><a href=\"mailto:"+contactEmail+"\">"+contactEmail+"</a></div><P></P><h2></h2></div>";
    
    
        return this.contentHTML;
    }

}