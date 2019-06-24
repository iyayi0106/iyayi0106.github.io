/*
var imported = document.createElement('script');
imported.src = 'myClasses.js';
document.head.appendChild(imported);
*/
//alert("starting");

baseUrl = "https://developer.nps.gov/api/v1/"; 
apiKey = "api_key=lxjTNJAwUx31QGdXFMRuDv8kXTTjP3fAb61ciSFi";
var searchObj;

var alertsData;
var articlesData;
var eventsData;
var campgroundsData;
var visitorCentersData;
var parksData;
var lessonPlansData;
var currentData;
var currentPage;

var alertsVCObj = new alertsViewController();
var articlesVCObj = new articlesViewController();
var eventsVCObj = new eventsViewController();
var campgroundsVCObj = new campgroundsViewController();
var visitorCentersVCObj = new visitorCentersViewController();
var parksVCObj = new parksViewController();
var lessonPlansVCObj = new lessonPlansViewController();

var apiLoader;



//1. Load first button here
//loadFromButton('alerts');

//var data;

function loadFromButton(buttonName,pageTitle){
    //1. create the api URL
    var urlToLoad = baseUrl+buttonName+"?limit=50&start=1&"+apiKey;
   
    currentPage = buttonName;
    //2. Add the Top Title to page
    writeToDiv("mainTitle", pageTitle);
    
    //3. Clear any previous "Found search"
    clearDiv("searchTitle");

    //4. Clear search input box
    clearSearch();

    //5. Update the Search box placeholder
    var placeholderText = "";
    var placeholderText = "Search "+pageTitle+"...";
    changePlaceholder("search", placeholderText);

    //6. Load page using the appropriate View Controller
    loadURL(urlToLoad);
}


function loadURL(urlToLoad){

    // set search to false
    var IsSearchSet = false; //bool
    
    // show the loading GIF until results get back
    showLoading();

    // set loading from API to true, only change to false if we already have the data
    var loadFromAPI = true;

    if(urlToLoad.indexOf("alerts") !== -1){

        console.log(" alerts data = "+alertsData);
        if((alertsData != null)
            && (typeof alertsData !== "undefined"))
        {
            searchObj = new search0bject(alertsData);
            removeLoading();
            alertsVCObj.loadData(alertsData);
            loadFromAPI = false;
        }
    }else if(urlToLoad.indexOf("articles") !== -1){


        if((articlesData != null)
            && (typeof articlesData !== "undefined"))
        {
            searchObj = new search0bject(articlesData);
            removeLoading();
            articlesVCObj.loadData(articlesData);
            loadFromAPI = false;
        }
        
        
    
    }else if(urlToLoad.indexOf("events") !== -1){
        if((eventsData != null)
            && (typeof eventsData !== "undefined"))
        {
            searchObj = new search0bject(eventsData);
            removeLoading();
            eventsVCObj.loadData(eventsData);
            loadFromAPI = false;
        }
        
        

    }else if(urlToLoad.indexOf("parks") !== -1){
        if((parksData != null)
            && (typeof parksData !== "undefined"))
        {
            searchObj = new search0bject(parksData);
            removeLoading();
            parksVCObj.loadData(parksData);
            loadFromAPI = false;
        }

        
        
    }else if(urlToLoad.indexOf("campgrounds") !== -1){
        if((campgroundsData != null)
            && (typeof campgroundsData !== "undefined"))
        {
            searchObj = new search0bject(campgroundsData);
            removeLoading();
            campgroundsVCObj.loadData(campgroundsData);
            loadFromAPI = false;
        }
        
       
        
    }else if(urlToLoad.indexOf("visitorcenters") !== -1){
        if((visitorCentersData != null)
            && (typeof visitorCentersData !== "undefined"))
        {
            searchObj = new search0bject(visitorCentersData);
            removeLoading();
            visitorCentersVCObj.loadData(visitorCentersData);
            loadFromAPI = false;
        }

        
        
    }else if(urlToLoad.indexOf("lessonplans") !== -1){
        if((lessonPlansData != null)
            && (typeof lessonPlansData !== "undefined"))
        {
            searchObj = new search0bject(lessonPlansData);
            removeLoading();
            lessonPlansVCObj.loadData(lessonPlansData);
            loadFromAPI = false;
        }
    }

    console.log(" Load from API = "+loadFromAPI);

    if(loadFromAPI == true){

        if (apiLoader) {
            apiLoader.abort();
            console.log("Stopping previous loading");
        }

        //function setup(){
        apiLoader = $.getJSON(urlToLoad, function(result){
            console.log(result);
            
            searchObj = new search0bject(result.data);
            removeLoading();
            if(urlToLoad.indexOf("alerts") !== -1){
                alertsData = result.data;
                alertsVCObj.loadData(alertsData);            

            }else if(urlToLoad.indexOf("articles") !== -1){
                articlesData = result.data;
                articlesVCObj.loadData(articlesData);
            
            }else if(urlToLoad.indexOf("events") !== -1){
                eventsData = result.data;
                console.log("loading events now");
                eventsVCObj.loadData(eventsData);

            }else if(urlToLoad.indexOf("parks") !== -1){
                parksData = result.data;
                console.log("loading parks now");
                parksVCObj.loadData(parksData);
                
            }else if(urlToLoad.indexOf("campgrounds") !== -1){
                campgroundsData = result.data;
                campgroundsVCObj.loadData(campgroundsData);
                
            }else if(urlToLoad.indexOf("visitorcenters") !== -1){
                visitorCentersData = result.data;
                visitorCentersVCObj.loadData(visitorCentersData);
                
            }else if(urlToLoad.indexOf("lessonplans") !== -1){
                lessonPlansData = result.data;
                lessonPlansVCObj.loadData(lessonPlansData);
            }

        });


    }

}


function detectEnterKey(){
    if (event.keyCode == 13){
        document.getElementById('submit').click();
    }
}

function searchAll(){
    var titleStr = document.getElementById("search").placeholder;
    writeToDiv("mainTitle", titleStr);
    clearDiv("searchTitle");
    clearDiv("main");
    var searchText = document.getElementById("search").value;
    searchObj.searchData(searchText, currentPage);
}

function clearSearch(){
    document.getElementById("search").value = "";
}

function capitalizeFirstLetter(word) {
    var firstLetter = word.charAt(0);
    var restOfWord = word.slice(1);
    var firstLetterUpperCase = firstLetter.toUpperCase();
    var capitalizedWord = firstLetterUpperCase + restOfWord;
    return capitalizedWord;
}

/**
 * adds content to a div
 * @param {*} divId 
 * @param {*} content 
 */
function writeToDiv(divId, content){
    document.getElementById(divId).innerHTML = content;
}

function writeToEndOfDiv(divId, content){
    document.getElementById(divId).innerHTML += content;
}

function clearDiv(divId){
    document.getElementById(divId).innerHTML = "";
}

function changePlaceholder(divId, placeHolderText){
    document.getElementById(divId).placeholder = placeHolderText;
}

function showLoading(){
    var content = "<div id=\"loading\" class=\"box\">"
    +"<img src=\"images/loading.gif\" alt=\"Loading\" width=\"800px\""
    +" height=\"600px\"><div class=\"text\"><h1>Loading...</h1></div></div>";

    writeToDiv("main", content);
}

function removeLoading(){
    clearDiv("main");
}

function highlight(divID,searchStr,spanClass) {
    
    var container = document.getElementById(divID);
    if(container != null){

        var content = container.innerHTML,
        //pattern = new RegExp('(>[^<.]*)(' + searchStr + ')([^<.]*)','gi'),
        //replaceWith = '$1<span ' + ( spanClass ? 'class="' + spanClass + '"' : '' ) + '">$2</span>$3',
        pattern = new RegExp('(.*)(' + searchStr + ')(.*)','gi'),
        replaceWith = '$1<span ' + ( spanClass ? 'class="' + spanClass + '"' : '' ) + '">$2</span>$3',
        highlighted = content.replace(pattern,replaceWith);
        return (container.innerHTML = highlighted) !== content;
    }else{

        return null;
    }

    
    
}

function doesContainsString(searchStr, fullText){
    var isStringFound = false;
    lowerSearchStr = searchStr.toLowerCase();
    lowerFullText = fullText.toLowerCase();

    if(lowerFullText.indexOf(lowerSearchStr) !== -1){
        isStringFound = true;
        alert("found = "+searchStr+" in Text: "+fullText);
    }
    else{
        alert("NOT found = "+searchStr+" in Text: "+fullText);
    }
    return isStringFound;
}