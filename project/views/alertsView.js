
class alertsViewCell {
    constructor() {
        this.contentHTML = "";
    }

    makeAlertsViewCell(title, description, url, category, parkCode){

        this.contentHTML = "<div id=\"viewcell\"><div id=\"title\" style=\"padding: 10px; font-weight: bold;\">"+title+"</div>"
        + "<div id=\"middle\">"
        +"<div id=\"photo\" style=\"max-width: 150px; float: left; height: 100px\"><img src=\"images/alert.png\" alt=\"alert\" style=\"max-width: 100px; padding-left: 10px; padding-right: 10px;\"></div>"
        +"<div id=\"description\" style=\"display: inline; width: 500px;clear: both; padding-left: 20px; height: 200px; vertical-align: top;\">"+description
        +"<br><b>Category: "+category+"</b><br><b>Park Code: "+parkCode+"</div></div>"
        +"<br><div id=\"link\"  style=\"clear: both;\"><a href=\""+url+"\">"+url+"</a></div><P></P><h2></h2></div>";
    
    
        console.log("Now content = "+this.contentHTML);
        return this.contentHTML;
    }

}