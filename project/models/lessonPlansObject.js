class lessonPlansObject {
    constructor() {
        
        this.id = "";
        this.duration = "";
        this.questionObjective = "";
        this.title = "";
        this.subject = "";
        this.gradeLevel = "";
        this.url = "";
        
    }

    makeContent(dataItem) {
       
        this.id = dataItem.id;
        this.duration = dataItem.duration;
        this.questionObjective = dataItem.questionobjective;

        this.title = dataItem.title;
        this.subject = dataItem.subject;
        this.gradeLevel = dataItem.gradelevel;
        this.url = dataItem.url;
        
    }

}
