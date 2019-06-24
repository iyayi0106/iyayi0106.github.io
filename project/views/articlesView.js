
class articlcesViewCell {
    constructor() {
        this.contentHTML = "";
    }

    makeArticlesViewCell(title, photoUrl, description, url, altText){
        if(photoUrl == ""){
            photoUrl = "images/image_placeholder.png";
        }
    
        this.contentHTML = "<div id=\"viewcell\"><div id=\"title\" style=\"padding: 10px; font-weight: bold;\">"+title+"</div>"
        + "<div id=\"middle\">"
        +"<div id=\"photo\" style=\"max-width: 250px; float: left; height: 200px\"><img src=\""+photoUrl+"\" alt=\""+altText+"\" style=\"max-width: 200px; padding-left: 10px; padding-right: 10px;\"></div>"
        +"<div id=\"description\" style=\"display: inline; width: 500px;clear: both; padding-left: 20px; height: 200px; vertical-align: top;\">"+description+"</div></div>"
        +"<br><div id=\"link\"  style=\"clear: both;\"><a href=\""+url+"\">"+url+"</a></div><P></P><h2></h2></div>";
    
        return this.contentHTML;
    }
    

}