
class search0bject {
    constructor(data) {
        this.data = data;
        this.searchStrLower = "";
        this.self = this;
        this.count = 0;
        
    }

    searchData(searchString, currentPage) {
        this.searchStrLower = searchString.toLowerCase();
        //alert("searching now = "+this.searchStrLower);

        if (typeof this.data !== "undefined"){

            searchObj.count = 0;
            //alert("hey data = "+this.data);
            $.each(this.data, function(key, item) {
                var isSearchFound = false;
                if (currentPage.indexOf("alerts") !== -1){
        
                    //alert("found alerts = "+item.listingdescription);
                    var alertsObj = new alertsObject();
                    alertsObj.makeContent(item);
                    console.log("search = "+searchObj.searchStrLower+" \nhey got it = "+alertsObj.description);

                    isSearchFound = searchObj.containsString(searchObj.searchStrLower, alertsObj.description);
                    if(isSearchFound == true){

                        //createContentFromAlert(alertsObj);

                        searchObj.count++;
                        var alertsViewObj = new alertsViewCell();
                        alertsVCObj.createContentFromAlert(alertsObj, alertsViewObj);

                    }                    

                }else if (currentPage.indexOf("articles") !== -1){
        
                    //alert("hey data = "+item.listingdescription);

                    var articleObj = new articleObject();
                    articleObj.makeContent(item);
                    console.log("Search articles = "+searchObj.searchStrLower+" \nhey got it = "+articleObj.articlesTitles);

                    isSearchFound = searchObj.containsString(searchObj.searchStrLower, articleObj.description);
                    if(isSearchFound == true){
                        var articleViewObj = new articlcesViewCell();
                        articlesVCObj.createContentFromArticle(articleObj, articleViewObj);
                        searchObj.count++;
                    }
                 
                    
                }else if (currentPage.indexOf("events") !== -1){
                    var eventsObj = new eventsObject();
                    eventsObj.makeContent(item);
                    console.log("hey got it = "+eventsObj.title);
                    
                    isSearchFound = searchObj.containsString(searchObj.searchStrLower, eventsObj.description);
                    if(isSearchFound == true){
                        var eventsViewObj = new eventsViewCell();
                        eventsVCObj.createContentFromEvent(eventsObj, eventsViewObj);
                    
                        searchObj.count++;
                    }


                }else if (currentPage.indexOf("parks") !== -1){

                    var parksObj = new parksObject();
                    parksObj.makeContent(item);
                    console.log("hey got it = "+parksObj.name);
                    isSearchFound = searchObj.containsString(searchObj.searchStrLower, parksObj.description);
                    

                    if(isSearchFound == true){
                        var parksViewObj = new parksViewCell();
                        parksVCObj.createContentFromPark(parksObj, parksViewObj);
                    
                        searchObj.count++;
                    }

                }else if (currentPage.indexOf("campgrounds") !== -1){


                    var campgroundsObj = new campgroundsObject();
                    campgroundsObj.makeContent(item);
                    console.log("hey got it = "+campgroundsObj.name);
                    isSearchFound = searchObj.containsString(searchObj.searchStrLower, campgroundsObj.description);
                    

                    if(isSearchFound == true){
                        var campgroundsViewObj = new campgroundsViewCell();
                        campgroundsVCObj.createContentFromCampground(campgroundsObj, campgroundsViewObj);
                    
                        searchObj.count++;
                    }

                }else if (currentPage.indexOf("visitorcentors") !== -1){

                    var visitorCentersObj = new visitorCentersObject();
                    visitorCentersObj.makeContent(item);
                    console.log("hey got it = "+visitorCentersObj.name);
                    isSearchFound = searchObj.containsString(searchObj.searchStrLower, visitorCentersObj.description);
                    

                    if(isSearchFound == true){
                        var visitorCentersViewObj = new visitorCentersViewCell();
                        visitorCentersVCObj.createContentFromVisitorCenter(visitorCentersObj, visitorCentersViewObj);
                    
                        searchObj.count++;
                    }


                }else if (currentPage.indexOf("lessonplans") !== -1){

                    var lessonPlansObj = new lessonPlansObject();
                    lessonPlansObj.makeContent(item);
                    console.log("hey got it = "+lessonPlansObj.title);
                    isSearchFound = searchObj.containsString(searchObj.searchStrLower, lessonPlansObj.questionObjective);
                    

                    if(isSearchFound == true){
                        var lessonPlansViewObj = new lessonPlansViewCell();
                        lessonPlansVCObj.createContentFromLessonPlans(lessonPlansObj, lessonPlansViewObj);
                    
                        searchObj.count++;
                    }
                    
                }


                //alert("ID = "+item.id+" -> "+item.title+" and artlink = "+item.url);
            });
        
        }
        else{
            //alert("data is not defined bro");
        }

        if(searchObj.count > 0){
            var foundText = "Found "+searchObj.count+" results";
        }
        else{

            var foundText = "No Results Found"; 
        }

        writeToDiv("searchTitle", foundText);
        console.log("wrote to div searchTitle");
        highlight("description",searchObj.searchStrLower,"highlight")       

    }

    containsString(searchStr, fullText){
        var isStringFound = false;
        var lowerSearchStr = searchStr.toLowerCase();
        var lowerFullText = fullText.toLowerCase();
    
        if(lowerFullText.indexOf(lowerSearchStr) !== -1){
            isStringFound = true;
            //alert("found = "+searchStr+" in Text: "+fullText);
        }
        else{
            //alert("NOT found = "+searchStr+" in Text: "+fullText);
        }   
        return isStringFound;
    }

}