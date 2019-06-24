
class lessonPlansViewController {
    constructor() {
        this.contentHTML = "";
    }

    loadData(data){

        var mySelf = this;
        $.each(data, function(key, item) {

            var lessonPlansObj = new lessonPlansObject();
            lessonPlansObj.makeContent(item);
            console.log("hey got it = "+lessonPlansObj.title);
            var lessonPlansViewObj = new lessonPlansViewCell();
            mySelf.createContentFromLessonPlans(lessonPlansObj, lessonPlansViewObj);
            
        });

    }

    createContentFromLessonPlans(modelObj, viewObj){
   

        var contentHTML = viewObj.makeLessonPlansViewCell(modelObj.title, modelObj.questionObjective,
            modelObj.subject, modelObj.gradeLevel, modelObj.duration, modelObj.url);
        writeToEndOfDiv("main",contentHTML);
    }

}