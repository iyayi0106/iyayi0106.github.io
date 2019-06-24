class lessonPlansViewCell {
    constructor() {
        this.contentHTML = "";
    }

    makeLessonPlansViewCell(title, questionObjective, subject, gradeLevel, duration, url){

        this.contentHTML = "<div id=\"viewcell\"><div id=\"title\" style=\"padding: 10px; font-weight: bold;\">"+title+"</div>"
        + "<div id=\"middle\">"
        +"<div id=\"description\" style=\"display: inline; width: 500px;clear: both; padding-left: 20px; height: 200px; vertical-align: top;\">"+questionObjective
        +"<br><b>Subject: </b>"+subject
        +"<br><b>Grade Level: </b>"+gradeLevel
        +"<br><b>Duration: </b>"+duration
        +"<br><div id=\"link\"  style=\"clear: both;\"><a href=\""+url+"\">"+url+"</a></div><P></P><h2></h2></div>";
    
        return this.contentHTML;
    }

}