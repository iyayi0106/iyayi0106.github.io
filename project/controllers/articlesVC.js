class articlesViewController {
    constructor() {
        this.contentHTML = "";
    }

    loadData(data){

        var mySelf = this;
        $.each(data, function(key, item) {
            

            var articleObj = new articleObject();
            articleObj.makeContent(item);
            console.log("hey got it = "+articleObj.title);
            var articleViewObj = new articlcesViewCell();
            mySelf.createContentFromArticle(articleObj, articleViewObj);
            
        });

    }

    createContentFromArticle(modelObj, viewObj){
   

        console.log("TITle in create content it = "+modelObj.title);
        var contentHTML = viewObj.makeArticlesViewCell(modelObj.title, modelObj.photoUrl, 
            modelObj.description, modelObj.url, modelObj.altText);
        writeToEndOfDiv("main",contentHTML);
    }

}